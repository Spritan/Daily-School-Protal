const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Professor = require("../models/Professor");
const verifyToken = require("../verifyToken");
const CryptoJs = require("crypto-js");

// ---------------------Login Professor ------------------------

router.post("/login", async (req, res) => {
  try {
    const reqProfessor = await Professor.findOne({ email: req.body.email });
    !reqProfessor && res.status(404).json("Wrong credentials!");

    if (
      req.body.password ===
      CryptoJs.AES.decrypt(
        reqProfessor.password,
        process.env.SECRETE_MESSAGE
      ).toString(CryptoJs.enc.Utf8)
    ) {
      const jwt_data = {
        id: reqProfessor._id,
      };
      const professorAuthToken = jwt.sign(jwt_data, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      const { password, ...otherInfo } = reqProfessor._doc;
      res.status(200).json({ otherInfo, professorAuthToken });
    } else {
      res.status(404).json("Wrong credentials!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// ------------------------Update Professor ----------------------

router.put("/update/:professorId", verifyToken, async (req, res) => {
  try {
    if (req.body.password) {
      const encryptedPassword = CryptoJs.AES.encrypt(
        req.body.password,
        process.env.SECRETE_MESSAGE
      ).toString();
      req.body.password = encryptedPassword;
    }
    await Professor.findByIdAndUpdate(
      req.params.professorId,
      { set: req.body },
      { new: true }
    );
    res.status(200).json("Updated Information");
  } catch (error) {
    res.status(500).json(error);
  }
});

// ------------------------Find a Professor ----------------------

router.get("/find/:professorId", verifyToken, async (req, res) => {
  try {
    const reqProfessor = await Professor.findById(req.params.professorId);
    const { password, ...otherInfo } = reqProfessor._doc;
    res.status(200).json(otherInfo);
  } catch (error) {
    res.status(500).json(error);
  }
});

//  ------------------Find all Professor-------------------------

router.get("/all", async (req, res) => {
  try {
    const allProfessors = await Professor.find();
    const reqDataAllProfessor = []
    allProfessors.map(prof => {
      const {password, ...otherInfo} = prof._doc
      reqDataAllProfessor.push(otherInfo)
    })
    res.status(200).json(reqDataAllProfessor)
  } catch (error) {
    res.status(500).json(error);
  }
})

router.get("");

module.exports = router;
