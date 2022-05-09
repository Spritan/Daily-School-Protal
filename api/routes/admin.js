const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");

const Professor = require("../models/Professor");
const Student = require("../models/Student");
const Parent = require("../models/Parents");

// -------------- All Professor Operations ---------------

//REGISTER
router.post("/professor/register", async (req, res) => {
  const encryptedPassword = CryptoJs.AES.encrypt(
    req.body.password,
    process.env.SECRETE_MESSAGE
  ).toString();
  req.body.password = encryptedPassword;
  const newProfessor = new Professor(req.body);
  try {
    const reqProfessor = await newProfessor.save();
    res.status(201).json(reqProfessor);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ------------- All Students Operations----------------

//REGISTER
router.post("/student/register", async (req, res) => {
  const encryptedPassword = CryptoJs.AES.encrypt(
    req.body.password,
    process.env.SECRETE_MESSAGE
  ).toString();
  req.body.password = encryptedPassword;
  const newStudent = new Student(req.body);
  try {
    const reqStudent = await newStudent.save();
    res.status(201).json(reqStudent);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ------------- All Parents Operations ---------------

//REGISTER
router.post("/parent/register", async (req, res) => {
  const encryptedPassword = CryptoJs.AES.encrypt(
    req.body.password,
    process.env.SECRETE_MESSAGE
  ).toString();
  req.body.password = encryptedPassword;
  const newParent = new Parent(req.body);
  try {
    const reqParent = await newParent.save();
    res.status(201).json(reqParent);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
