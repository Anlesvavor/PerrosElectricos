const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const schema = new Schema({
    _id: ObjectId,
    _name: String,
    _description: String,
    _user_id: String
});

class Dog {
    constructor(id, name, description, userId) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._userId = userId;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get userId() {
        return this._userId;
    }

    set userId(value) {
        this._userId = value;
    }
}

schema.loadClass(Dog);
module.exports = mongoose.model('Dog', schema);
