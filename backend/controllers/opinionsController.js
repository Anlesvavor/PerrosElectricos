const express = require('express');
const Opinion = require('../models/opinion');
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

    let opinion = new Opinion({
        _id: req.body._id ? req.body._id : new ObjectID(),
        _dog_id : body._dog_id,
        _user_id: body._user_id,
        _opinion: body._opinion
    });

    opinion.save()
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
        select: '_id _dog_id _user_id _opinion'
    };

    Opinion.paginate({}, options)
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

    Opinion.findById(req.params.id)
        .then((obj) => {
            const body = req.body;
            obj._dog_id = ch(obj._dog_id, body._dog_id);
            obj._user_id = ch(obj._user_id, body._user_id);
            obj._opinion = ch(obj._opinion, body._opinion);


            obj.save()
                .then(obj => {
                    res.json({opinion : obj});
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
    Opinion.findById(req.params.id, (err, opinion) => {
        res.status(200).json({
            errors:[],
            data: opinion
        });
    }).catch((err) => {
        res.status(500).json({
            errors:[{message:'something gone wrong'}],
            data: []
        });
    });
}

function drop(req, res, next) {
    Opinion.findByIdAndRemove({_id: req.params.id})
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
