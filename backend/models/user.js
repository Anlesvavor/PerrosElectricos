const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const schema = new Schema({
    _id: ObjectId,
    _email: String,
    _password: String,
    _role: Number,
    _name: String,
    _surname: String
});


class User {
    constructor(id, email, password, role, name, surname) {
        this._id = id;
        this._email = email;
        this._password = password;
        this._role = role;
        this._name = name;
        this._surname = surname;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    get role() {
        return this._role;
    }

    set role(value) {
        this._role = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get surname() {
        return this._surname;
    }

    set surname(value) {
        this._surname = value;
    }

}

schema.loadClass(User);
module.exports = mongoose.model('User', schema);
