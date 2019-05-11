const express = require("express");
const passport = require('passport');
const router = express.Router();
const Travel = require("../models/Travel");

router.get('/all', (req, res, next) => {
  // encontrar viajes del autor
  Travel
    .find()
    .then(allTheTravels => 
      res.json(allTheTravels))
});

router.get('/one/:id', (req, res, next) => {
  // mostrar un viaje especifico
  Travel
    .findById(req.params.id)
    .then(Travel => res.json(Travel))
});


router.post('/new', (req, res) => {
//vincular con autor
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
    res.json(travel);
  })
  .catch((err) =>{
    console.log(err);
  })
})



module.exports = router;