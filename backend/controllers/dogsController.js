const express = require('express');
const Dog = require('../models/dog');
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

    let dog = new Dog({
        _id: req.body._id ? req.body._id : new ObjectID(),
        _name : body._name,
        _description: body._description,
        _user_id: body._user_id
    });

    dog.save()
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
        select: '_name _description _user_id'
    };

    Dog.paginate({}, options)
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

    Dog.findById(req.params.id)
        .then((obj) => {
            obj._name = ch(obj._name, req.body._name);
            obj._description = ch(obj._description, req.body._description);
            obj._user_id = ch(obj._user_id, req.body._user_id);

            obj.save()
                .then(obj => {
                    res.json({dog : obj});
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
    Dog.findById(req.params.id, (err, dog) => {
        res.status(200).json({
            errors:[],
            data: dog
        });
    }).catch((err) => {
        res.status(500).json({
            errors:[{message:'something gone wrong'}],
            data: []
        });
    });
}

function drop(req, res, next) {
    Dog.findByIdAndRemove({_id: req.params.id})
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
