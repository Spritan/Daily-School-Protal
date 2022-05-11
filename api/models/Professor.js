const mongoose = require("mongoose");

const professorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePic: String,
  class: { type: Array, required: true },
  // courseName: Array,
  // deptName: Array,
  // semester: Array,
  montor: Array,
  isHOI: { type: Boolean },
  isHOD: String,
  notices: Array,
  assignment: Array,
  attendence: Array,
  exams: Array,
});

module.exports = mongoose.model("Professor", professorSchema);
