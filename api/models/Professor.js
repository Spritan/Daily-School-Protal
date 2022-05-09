const mongoose = require("mongoose");

const professorSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    profilePic: String,
    class: Array,
    // courseName: Array,
    // deptName: Array,
    // semester: Array,
    montor: Array,
    isHOI : Boolean,
    isHOD : Array,
    notices: Array,
    assignment: Array,
    attendence: Array,
    exams: Array
})

module.exports = mongoose.model('Professor', professorSchema)