const express = require('express')
const router = express.Router()
const Park = require('../models/park.model')

router.get("/new", (req, res) => {
    res.render("parks/new-park");
  });

router.post("/new", (req, res) => {
    Park.create({ name: req.body.name, description: req.body.description, active: true })
    .then(() => {
    res.redirect("/new")
    })
});

module.exports = router
