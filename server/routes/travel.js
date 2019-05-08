const express = require("express");
const passport = require('passport');
const router = express.Router();
const Travel = require("../models/Travel");

router.get('/all', (req, res, next) => {
  Travel
    .find()
    .then(allTheTravels => 
      res.json(allTheTravels))
});

router.get('/one/:id', (req, res, next) => {
  Travel
    .findById(req.params.id)
    .then(Movie => res.json(Travel))
});


router.post('/new', (req, res) => {
  console.log(req.body, "body")

  const {name, country, city, date} = req.body;
  const travel = {
   name, 
   country,
   city,
   date,
    
  }
  const newTravel = new Travel(travel);
  newTravel.save()
  .then((travel) => {
    res.json(travel);
  })
});

router.delete('/delete/:id', (req, res,next) => {
  const id = req.params.id;
  Travel.findByIdAndRemove(id)
  .then((travel) =>{
    res.json(travel);
  })
  .catch((err) => {
    console.log("no se ha borrado");
  })
});


router.put('/edit/:id', (req,res) => {
const id = req.params.id
  
  Travel.findByIdAndUpdate(id, req.body)
  .then((travel) =>{
    console.log(travel)
    res.json(travel);
  })
  .catch((err) =>{
    console.log(err);
  })
})



module.exports = router;