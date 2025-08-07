const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  studentName: {
    type: String,
    require: true,
  },
  matricNo: {
    type: Number,
    require: true,
  },
  bio: {
    type: String,
  },
});

const studentModel = mongoose.model("students", studentSchema);
module.exports = studentModel;
