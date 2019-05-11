const express = require("express");
const passport = require('passport');
const router = express.Router();
const Plan = require("../models/Plan");
const Travel = require("../models/Travel");
const uploadCloud = require("../config/cloudinary.js");


router.get('/all', (req, res, next) => {
  Plan
  //filtrar planes por viaje y fechas, (genero y edad del lgueado??) 
    .find()
    .then(allThePlan => 
      res.json(allThePlan))
});

router.get('/selected', (req, res, next) => {
  Plan
  //filtrar planes por viaje y fechas, (genero y edad del lgueado??) 
    .find({city: req.query.city , date: req.query.date})
    .then(allThePlan => 
      res.json(allThePlan))
});

router.get('/one/:id', (req, res, next) => {
  Plan
  // mostrar plan especifico.
    .findById(req.params.id)
    .then(Plan => res.json(Plan))
});


router.post('/:id/new', uploadCloud.single("photo"), (req, res) => {
  const id = req.params.id;
  var imgPath = req.file.url;
  var imgName = req.file.originalname;
  const {name, city, type, hour, place, maxYear, date, description, lang, genre, rate} = req.body;
  const plan = {
    name,
    city,
    type,
    description,
    place,
    hour,
    maxYear,
    imgPath,
    date,
    lang,
    genre,
    rate,
    // author //añado autor aqui
  }
  const newPlan = new Plan(plan);
  Travel.findByIdAndUpdate(id, {$addToSet: {plans: newPlan }}, {new: true})
  .then(travel=> {
    newPlan.save().then(planNew=>res.status(201).json(planNew))
    })
  .catch(err=> res.status(500).json(err))
  
});

router.delete('/delete/:id', (req, res,next) => {
  const id = req.params.id;
  Plan.findByIdAndRemove(id)
  .then((plan) =>{
    res.json(plan);
  })
  .catch((err) => {
    console.log("no se ha borrado");
  })
});


router.put('/edit/:id', uploadCloud.single("photo"), (req,res) => {
  const id = req.params.id
  var imgPath = req.file.url;
  var imgName = req.file.originalname;
  const {name, city, type, hour, place, maxYear, date, description, lang, genre, rate} = req.body;
  const planEdit = {
    name,
    city,
    type,
    description,
    place,
    hour,
    maxYear,
    imgPath,
    date,
    lang,
    genre,
    rate,
  }
  
  Plan.findByIdAndUpdate(
    id,
    req.body)
  .then((data) =>{
    res.json(data);
  })
  .catch((err) =>{
    console.log(err);
  })
})



module.exports = router;