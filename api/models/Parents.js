const mongoose = require("mongoose");

const parentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    child_roll_no: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

module.exports = mongoose.model('Parents', parentSchema)