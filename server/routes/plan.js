const express = require("express");
const passport = require('passport');
const router = express.Router();
const Plan = require("../models/Plan");
const Travel = require("../models/Travel");
const uploadCloud = require("../config/cloudinary.js");


router.get('/all', (req, res, next) => {
  Plan
  //filtrar planes por viaje y fechas, (genero y edad del logueado??) 
    .find()
    .then(allThePlan => 
      res.json(allThePlan))
});


router.get('/plans/filtered', (req, res, next) => {
  Plan
  //filtrar planes por viaje y fechas, (genero y edad del logueado??) 
    .find({minDate: {$gte: ISODate("2019-05-15T00:00:00.000+00:00"), $lte: ISODate("2019-05-18T00:00:00.000+00:00")}})
    .then(allThePlan => 
      res.json(allThePlan))
});



router.get('/:id/plansoftravel', (req, res, next) => {
  Plan
  //Mostrar los planes añadidos a ese viaje
    .find({city: req.query.city, date: req.query.date})
    .then(allThePlan => 
      res.json(allThePlan))
});


//mostrar un solo plan
router.get('/one/:id', (req, res, next) => {
  Plan
  // mostrar plan especifico.
    .findById(req.params.id)
    .populate("participants")
    .then(Plan => res.json(Plan))
});


router.post('/:id/new', (req, res) => {
  const id = req.params.id;
  const {name, city ,date, type, description, lang, genre, hour, maxYear, place, comments, imageUrl} = req.body;
  const plan = {
    name,
    city,
    date,
    type,
    description,
    lang,
    genre,
    hour,
    maxYear,
    place,
    comments,
    imageUrl,
    author: req.user
    // author //añado autor aqui
  }
  const newPlan = new Plan(plan);
  Travel
  .findByIdAndUpdate(id, {$addToSet: {plans: newPlan }}, {new: true})
  .populate("plans")

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


router.put('/:id/edit', (req,res) => {
  const idw = req.params.id
  console.log(idw, "meter en el plan al usuario")
  const {participants} = req.body;
  const newParticipant = req.user
  Plan.findByIdAndUpdate(req.params.id, {$addToSet: {participants: newParticipant }}, {new: true})
  .populate("participants")
  .then((data) =>{
    res.json(data);
  })
  .catch((err) =>{
    console.log(err);
  })
})



module.exports = router;