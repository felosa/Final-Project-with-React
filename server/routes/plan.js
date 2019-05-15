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
    .populate("comments")
    .then(allThePlan => 
      res.json(allThePlan))
});


router.get('/plans/filtered/:minDate/:maxDate', (req, res, next) => {
  Plan
  //filtrar planes por viaje y fechas, (genero y edad del logueado??) 
    .find({date: {$gte: ISODate(req.params.minDate), $lte: ISODate(req.params.maxDate)}})
    .populate("comments")
    .then(allThePlanWithInDates => 
      res.json(allThePlanWithInDates))
});



router.get('/:id/plansoftravel', (req, res, next) => {
  Plan
  //Mostrar los planes añadidos a ese viaje
    .find({city: req.query.city, date: req.query.date})
    .populate("comments")
    .then(allThePlan => 
      res.json(allThePlan))
});


//mostrar un solo plan
router.get('/one/:id', (req, res, next) => {
  Plan
  // mostrar plan especifico.
    .findById(req.params.id)
    .populate("participants")
    .populate("comments")
    .then(Plan => res.json(Plan))
});


router.post('/:id/new', (req, res) => {
  const id = req.params.id;
  const {name, city ,date, type, description, lang, genre, hour, maxYear, place, imageUrl} = req.body;
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
    imageUrl,
    author: req.user
    // author //añado autor aqui
  }
  const newPlan = new Plan(plan);
  Travel
  .findByIdAndUpdate(id, {$addToSet: {plans: newPlan }}, {new: true})
  .populate("plans")
  .populate("comments")

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
  .populate("comments")
  .then((data) =>{
    res.json(data);
  })
  .catch((err) =>{
    console.log(err);
  })
})



module.exports = router;