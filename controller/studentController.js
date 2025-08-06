const studentModel = require("../model/studentModel");

const getAllStudents = async (req, res) => {
  try {
    const allStudents = await studentModel.find();
    res.status(200).json({
      message: "Students gotten successfully",
      data: allStudents,
    });
  } catch (error) {
    res.status(400).json({
      message: "error processing request",
      data: error,
    });
  }
};

const newStudents = async (req, res) => {
  try {
    const { studentName, bio, matricNo } = req.body;
    let count = 1;
    const increasedMatricNo = Math.floor(Math.random() * 10000);
    const createStudent = await studentModel.create({
      studentName,
      bio,
      matricNo: `STU-${increasedMatricNo}`,
    });
    res.status(200).json({
      message: "new student added",
      data: createStudent,
    });
  } catch (error) {
    res.status(400).json({
      message: "error registering new student",
      data: error,
    });
  }
};

const getOneStudent = async (req, res) => {
  try {
    const findOne = await studentModel.findById(req.params.id);
    res.status(200).json({
      message: "got one student successfully",
      data: findOne,
    });
  } catch (error) {
    res.status(400).json({
      message: "error finding student",
      data: error,
    });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { studentName, bio } = req.body;
    const changes = await studentModel.findByIdAndUpdate(
      req.params.id,
      { studentName, bio },
      { new: true }
    );
    res.status(200).json({
      message: "update successful",
      data: changes,
    });
  } catch (error) {
    res.status(400).json({
      message: "error updating student",
      data: error,
    });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const remove = await studentModel.findByIdAndDelete(req.params.id);
    if (!remove) {
      res.status(201).json({
        message: "user not found",
      });
    }
    res.status(200).json({
      message: "user deleted successfully",
      data: remove,
    });
  } catch (error) {
    res.status(400).json({
      message: "error",
      data: error,
    });
  }
};
module.exports = {
  getAllStudents,
  newStudents,
  updateStudent,
  getOneStudent,
  deleteStudent,
};
