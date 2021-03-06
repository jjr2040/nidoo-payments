const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const zoneFeeModel = new Schema({
    fee: Number,
    zone: String,
    createdAt: Date,
    createdBy: String
});

module.exports = mongoose.model('ZoneFee', zoneFeeModel);