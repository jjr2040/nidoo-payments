const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const zoneFeeModel = new Schema({
    fee: number,
    zone: string
});

module.exports = mongoose.model('ZoneFee', zoneFeeModel);