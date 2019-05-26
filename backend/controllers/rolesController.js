const express = require('express');
const Role = require('../models/role');
const {validationResult} = require('express-validator/check');

function create(req, res, next) {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            errors: errors.array()
        });
    }

    let role = new Role({
        _id: req.body.id,
        _name : req.body.name
    });

    role.save()
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
        select: '_id _name'
    };

    Role.paginate({}, options)
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
    Role.findById(req.params.id)
        .then((obj) => {
            obj.id = req.body.id ? req.body.id : obj.id;
            obj.name = req.body.name ? req.body.name : obj.name;

            obj.save()
                .then(obj => {
                    res.json({role : obj});
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
    Role.findById(req.params.id, (err, role) => {
        res.status(200).json({
            errors:[],
            data: role
        });
    }).catch((err) => {
        res.status(500).json({
            errors:[{message:'something gone wrong'}],
            data: []
        });
    });
}

function drop(req, res, next) {
    Role.findByIdAndRemove({_id: req.params.id})
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
