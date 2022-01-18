const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, min: 8, required: true },
    isAdmin: { type: Boolean, default: false },
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);