const express = require('express');
const router  = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const passport = require('passport');
const uploadCloud = require('../config/cloudinary.js');


const login = (req, user) => {
  return new Promise((resolve,reject) => {
    req.login(user, err => {
      console.log('req.login ')
      console.log(user)

      
      if(err) {
        reject(new Error('Something went wrong'))
      }else{
        resolve(user);
      }
    })
  })
}


// SIGNUP
router.post('/signup', (req, res, next) => {

  const {username, password, 
    // userPhoto
  } = req.body;

  console.log('username', username)
  console.log('password', password)

  // Check for non empty user or password
  if (!username || !password){
    next(new Error('You must provide valid credentials'));
  }

  // Check if user exists in DB
  User.findOne({ username })
  .then( foundUser => {
    if (foundUser) throw new Error('Username already exists');

    const salt     = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    return new User({
      username,
      password: hashPass,
      // userPhoto,
    }).save();
  })
  .then( savedUser => login(req, savedUser)) // Login the user using passport
  .then( user => res.json({status: 'signup & login successfully', user})) // Answer JSON
  .catch(e => next(e));
});


//LOGIN
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    
    // Check for errors
    if (err) next(new Error('Something went wrong')); 
    if (!theUser) next(failureDetails)

    // Return user and logged in
    login(req, theUser).then(user => res.status(200).json(req.user));

  })(req, res, next);
});


router.get('/currentuser', (req,res,next) => {
  if(req.user){
    res.status(200).json(req.user);
  }else{
    next(new Error('Not logged in'))
  }
})


//EDIT USER

router.post('/photo/:id', 
uploadCloud.single('photo'), 
(req, res, next) => {
  var imgPath = req.file.url;
  var imgName = req.file.originalname;
  console.log(imgPath, imgName)
  User.findByIdAndUpdate({_id: req.params.id}, 
    {
    imgPath,
    imgName,
  },
   { new: true })
  .then(user => {
    console.log(user)
      res.json(user)
    })
    .catch(error => {
      console.log(error);
    })
})


// router.post(
//   "/miperfil/:id/edit",
//   uploadCloud.single("photo"),
//   (req, res, next) => {
//     const { username, email, password, phone, photo, rating } = req.body;
//     var usuario = req.user;
//     console.log("mi test ", imgPath);
//     if (req.file === undefined) {
//       var imgPath = usuario.imgPath;
//       var imgName = usuario.imgName;
//     } else {
//       var imgPath = req.file.url;
//       var imgName = req.file.originalname;
//     }

//     User.findOneAndUpdate(
//       { _id: req.params.id },
//       { username, email, phone, imgPath, imgName }
//     )
//       .then(celebrity => {
//         res.redirect("/auth/miperfil");
//       })
//       .catch(err => {
//         res.render("./error", err);
//       });
//   }
// );


router.get('/logout', (req,res) => {
  req.logout();
  res.status(200).json({message:'logged out'})
});


router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
})

module.exports = router;