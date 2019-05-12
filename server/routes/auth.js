const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const passport = require("passport");
const uploadCloud = require("../config/cloudinary.js");
const Travel = require("../models/Travel");
const Plan = require("../models/Plan");


const login = (req, user) => {
  return new Promise((resolve, reject) => {
    req.login(user, err => {

      if (err) {
        reject(new Error(err));
      } else {
        resolve(user);
      }
    });
  });
};

// SIGNUP
router.post("/signup", (req, res, next) => {
  console.log(req.body)

  const {
    username,
    password,
    lang,
    country,
    description,
    genre,
    year
  } = req.body;

console.log(username, "username", password, "password")
  // Check for non empty user or password
  if (!username || !password) {
    res.status(404).json()
    return;
    //next(new Error("You must provide valid credentials"));
  }

  // Check if user exists in DB
  User.findOne({ username })
    .then(foundUser => {
      if (foundUser) throw new Error("Username already exists");

      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);

      return new User({
        username,
        password: hashPass,
        lang,
        country,
        description,
        genre,
        year
      }).save();
    })
    .then(savedUser => {
      login(req, savedUser);
    }) // Login the user using passport
    .then(user => res.json({ status: "signup & login successfully", user })) // Answer JSON
    .catch(e => next(e));
});

//LOGIN

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, theUser, failureDetails) => {
    // Check for errors
    if (err) {
      res.status(500).json({ message: "Wrong" });
      return;
    }
    if (!theUser) {
      res.status(401).json(failureDetails);
      return;
    }

    // Return user and logged in
    req.login(theUser, err => {
      if (err) {
        res.status(500).json({ message: "Wow" });
        return;
      }
      res.status(200).json(theUser);
    });
  })(req, res, next);
});

router.get("/currentuser", (req, res, next) => {
  console.log("hey")
  if (req.user) {
    res.status(200).json(req.user);
  } else {
    next(new Error("Not logged in"));
  }
});

//EDIT USER

router.post("/edit/:id", uploadCloud.single("photo"), (req, res, next) => {
  var imgPath = req.file.url;
  var imgName = req.file.originalname;
  const {
    lang,
    country,
    description,
    genre,
    year
  } = req.body;

  User.findByIdAndUpdate(
    { _id: req.params.id },
    {
      imgPath,
      imgName,
      lang,
      country,
      description,
      genre,
      year
    },
    { new: true }
  )
    .then(user => {
     
      res.json(user);
    })
    .catch(error => {
      console.log(error);
    });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.status(200).json({ message: "logged out" });
});

router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = router;
