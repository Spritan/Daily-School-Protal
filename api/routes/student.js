const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Student = require("../models/Student");
const CryptoJs = require("crypto-js");

// ---------------------Login Student ------------------------

router.post("/login", async (req, res) => {
  try {
    const reqStudent = await Student.findOne({ email: req.body.email });
    !reqStudent && res.status(404).json("Wrong credentials!");

    if (
      req.body.password ===
      CryptoJs.AES.decrypt(
        reqStudent.password,
        process.env.SECRETE_MESSAGE
      ).toString(CryptoJs.enc.Utf8)
    ) {
      const jwt_data = {
        id: reqStudent._id,
      };
      const studentAuthToken = jwt.sign(jwt_data, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      const { password, ...otherInfo } = reqStudent._doc;
      res.status(200).json({ otherInfo, studentAuthToken });
    } else {
      res.status(404).json("Wrong credentials!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// ---------------------Find all Students from a class------------------------

router.post("/class", async (req, res) => {
  try {
    // {courseName: req.body.courseName, deptName: req.body.deptName, semester: req.body.semester}
    const reqStudents = await Student.find({
      courseName: req.body.courseName,
      deptName: req.body.deptName,
      semester: 4,
    });
    res.status(200).json(reqStudents);
  } catch (error) {
    res.status(500).json(error);
  }
});

// ---------------------Update Student --------------------------
router.put("/update/:studentId", async (req, res) => {
  try {
    if (req.body.password) {
      const encryptedPassword = CryptoJs.AES.encrypt(
        req.body.password,
        process.env.SECRETE_MESSAGE
      ).toString();
      req.body.password = encryptedPassword;
    }
    await Student.findByIdAndUpdate(
      req.params.studentId,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json("User Information is updated successfully!!");
  } catch (error) {
    // We will come to the error page later
    res.status(500).json(error);
  }
});

module.exports = router;
