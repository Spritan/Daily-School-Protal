const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Parent = require("../models/Parents");

// ------------Login Parent---------------

router.post("/login", (req, res) => {
    try {
      const parent = Parent.findOne({ email: req.body.username });
      !user && res.status(401).json("Wrong credentials!");
  
      const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASS_SEC
      );
      const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
  
      OriginalPassword !== req.body.password &&
        res.status(401).json("Wrong credentials!");
  
      const accessToken = jwt.sign({ id: parent._id }, process.env.JWT_SEC, {
        expiresIn: "3d",
      });
  
      const { password, ...others } = user._doc;
  
      res.status(200).json({ ...others, accessToken });
    } catch (error) {
      res.status(500).json(error);
    }
  });


module.exports = router;