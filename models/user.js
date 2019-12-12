const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true
    },
    handphone: {
        type: String,
        trim: true,
        required: true,
        index: true,
        unique: true
    },
    hoby: {
        type: String
    }
},
    {
        timestamps: true
    });

module.exports = mongoose.model('User', UserSchema);
