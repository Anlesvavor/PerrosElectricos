const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const schema = new Schema({
    _id: Number,
    _name: String
});

class Role{

    constructor(id, name) {
        this._id = id;
        this._name = name;
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
}
schema.plugin(mongoosePaginate);
schema.loadClass(Role);
module.exports = mongoose.model('Role', schema);
