const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Professor = require('../models/Professor')
const verifyToken = require('../verifyToken')
const CryptoJS = require('crypto-js')

// ---------------------Login Professor ------------------------

router.post("/login", (req, res) => {
    try {
      const professor = Professor.findOne({ email: req.body.username });
      !user && res.status(401).json("Wrong credentials!");
  
      const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASS_SEC
      );
      const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
  
      OriginalPassword !== req.body.password &&
        res.status(401).json("Wrong credentials!");
  
      const accessToken = jwt.sign({ id: professor._id }, process.env.JWT_SEC, {
        expiresIn: "3d",
      });
  
      const { password, ...others } = user._doc;
  
      res.status(200).json({others, accessToken });
    } catch (error) {
      res.status(500).json(error);
    }
  });

  // ------------------------Update Professor ----------------------

  router.put('/update/:professorId', verifyToken, async (req, res) => {
    try {
      if(req.body.password){
        const encryptedPassword = CryptoJs.AES.encrypt(
          req.body.password,
          process.env.SECRETE_MESSAGE
        ).toString();
          req.body.password = encryptedPassword
      }
      await Professor.findByIdAndUpdate(req.params.professorId, {set: req.body}, {new: true})
      res.status(200).json("Updated Information");
    } catch (error) {
      res.status(500).json(error);
    }
  })

// ------------------------Find a Professor ----------------------

router.get('/find/:professorId', verifyToken, async (req, res) => {
  try {
    const reqProfessor = await Professor.findById(req.params.professorId)
    const {password, ...otherInfo} = reqProfessor._doc
    res.status(200).json(otherInfo);
  } catch (error) {
    res.status(500).json(error);
  }
})




module.exports = router;