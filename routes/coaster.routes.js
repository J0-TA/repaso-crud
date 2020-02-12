const express = require('express')
const router = express.Router()
const Coaster = require('../models/coaster.model')
const Park = require('../models/park.model')

router.get("/new", (req, res) => {
    Park.find().then((allParks)=> {
    res.render("coasters/new-coaster", {allParks});
  });
});

router.post("/new", (req, res) => {
    Coaster.create({ 
        name: req.body.name,
        description: req.body.description,
        inversions: req.body.inversions,
        length: req.body.lenght,
        active: true,
        park:  req.body.park 
    })
    .then(() => {
    res.redirect("/coasters/new")
    })
});

router.get("/:id", (req, res) => {
    Coaster.findOne({_id: req.params.id})
    .populate('park')
    .then((coasterFound)=> {
    res.render("coasters/coaster-details", coasterFound);
  });
});

router.get("/", (req, res) => {
    Coaster.find()
    .populate('park')
    .then((allCoasters)=> {
    res.render("coasters/coasters-index", {allCoasters});
  });
});





module.exports = router