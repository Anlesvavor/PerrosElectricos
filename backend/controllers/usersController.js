const express = require('express');
const User = require('../models/user');
const {validationResult} = require('express-validator/check');
var ObjectID = require('mongodb').ObjectID;

function create(req, res, next) {

    const body = req.body;

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            errors: errors.array()
        });
    }

    let user = new User({
        _id: req.body._id ? req.body._id : new ObjectID(),
        _email : body._email,
        _password: body._password,
        _role: body._role,
        _name: body._name,
        _surname: body._surname
    });

    user.save()
        .then((obj) => {
            return res.status(200).json({
                errors:[],
                data:obj
            })
        })
        .catch((err) => {
            return res.status(500).json({
                errors:[{message: 'Something went wrong on create'}],
                data:[err]
            })
        })
}

function listAll(req, res, next) {

    let page = req.param.page ? req.params.page : 1;

    const options = {
        page: page,
        limit: 1000,
        select: '_email _password _role _name _surname'
    };

    User.paginate({}, options)
        .then(obj => {
            res.status(200).json({
                errors:[],
                data:obj
            })
        })
        .catch(err => {
            res.status(500).json({
                errors:[{message: 'Something went wrong'}],
                data: []
            });
        });
}

function update(req, res, next) {

    const ch = (old, nw) =>  nw ? nw : old;

    User.findById(req.params.id)
        .then((obj) => {
            obj._email = ch(obj._email, req.body._email);
            obj._password = ch(obj._password, req.body._password);
            obj._role = ch(obj._role, req.body._role);
            obj._name = ch(obj._name, req.body._name);
            obj._surname = ch(obj._surname, req.body._surname);

            obj.save()
                .then(obj => {
                    res.json({user : obj});
                })
                .catch(err => {
                    res.status(400).send('Update failed');
                })
        })
        .catch((err) => {
            res.status(500).json({
                errors: [{ message: 'something gone wrong'}],
                data: []
            })
        })
}

function listOne(req, res, next) {
    User.findById(req.params.id, (err, user) => {
        res.status(200).json({
            errors:[],
            data: user
        });
    }).catch((err) => {
        res.status(500).json({
            errors:[{message:'something gone wrong'}],
            data: []
        });
    });
}

function drop(req, res, next) {
    User.findByIdAndRemove({_id: req.params.id})
        .then( obj => {
            res.status(200).json({
                errors:[],
                data: obj
            });
        })
        .catch( err => {
            res.status(500).json({
                errors: [{ message: 'Something went wrong'}],
                data : []
            })
        })
}

module.exports = {
    create,
    listOne,
    listAll,
    update,
    drop
};
