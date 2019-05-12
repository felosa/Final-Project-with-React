const express = require("express");
const passport = require('passport');
const router = express.Router();
const Travel = require("../models/Travel");
const User = require("../models/User");


router.get('/:id/all', (req, res, next) => {
  // encontrar viajes del usuario
  Travel
    .findById(req.params.id)
    .then(allTheTravels => 
      res.json(allTheTravels))
});

router.get('/:id/one', (req, res, next) => {
  // mostrar un viaje especifico
  Travel
    .findById(req.params.id)
    .then(Travel => res.json(Travel))
});


router.post('/:id/new', (req, res) => {
//vincular con autor
const id = req.params.id;
  const {name, country, city, date} = req.body;
  const travel = {
   name, 
   country,
   city,
   date,
    
  }
  const newTravel = new Travel(travel);
  User.findByIdAndUpdate(id, {$addToSet: {travels: newUser }}, {new: true})
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
    res.json(travel);
  })
  .catch((err) =>{
    console.log(err);
  })
})



module.exports = router;