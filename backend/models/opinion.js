const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const schema = new Schema({
   _id: ObjectId,
   _dog_id: String,
   _user_id: String,
    _opinion: String
});

class Opinion {
    constructor(id, dogId, userId, opinion) {
        this._id = id;
        this._dog_id = dogId;
        this._user_id = userId;
        this._opinion = opinion
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get dogId() {
        return this._dog_id;
    }

    set dogId(value) {
        this._dogId = value;
    }

    get userId() {
        return this._user_id;
    }

    set userId(value) {
        this._user_id = value;
    }

    get opinion() {
        return this._opinion;
    }

    set opinion(value) {
        this._opinion = value;
    }
}
schema.plugin(mongoosePaginate);
schema.loadClass(Opinion);
module.exports = mongoose.model('Opinion', schema);
