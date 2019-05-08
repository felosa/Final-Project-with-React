const express = require("express");
const passport = require('passport');
const router = express.Router();
const Plan = require("../models/Plan");

router.get('/all', (req, res, next) => {
  Plan
    .find()
    .then(allThePlan => 
      res.json(allThePlan))
});

router.get('/one/:id', (req, res, next) => {
  Plan
    .findById(req.params.id)
    .then(Plan => res.json(Plan))
});


router.post('/new', (req, res) => {
  console.log(req.body, "body")
 

  const {name, type, place, date, lang, genre, rate} = req.body;
  const plan = {
    name,
    type,
    place,
    image,
    date,
    lang,
    genre,
    rate,
  }
  const newPlan = new Plan(plan);
  newPlan.save()
  .then((plan) => {
    res.json(plan);
  })
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


router.put('/edit/:id', (req,res) => {
const id = req.params.id
  
  Plan.findByIdAndUpdate(id, req.body)
  .then((plan) =>{
    console.log(travel)
    res.json(travel);
  })
  .catch((err) =>{
    console.log(err);
  })
})



module.exports = router;