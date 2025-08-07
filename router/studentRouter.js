const express = require("express");
const router = express.Router();
const {
  getAllStudents,
  newStudents,
  updateStudent,
  getOneStudent,
  deleteStudent,
} = require("../controller/studentController");

router.route("/getallstudents").get(getAllStudents);
router.route("/newstudents").post(newStudents);
router.route("/updatestudent/:id").post(updateStudent);
router.route("/getonestudent/:id").get(getOneStudent);
router.post("/deletestudent/:id").post(deleteStudent);

module.exports = router;
