const express = require('express');;
const router = require('express').Router();
const clayRouter = express.Router();
const Clay = require("../models/clays");
const claySeed = require("../models/claySeed.js");

// const Enhancement = require('../models/enhancements');
// const Oil = require('../models/oils');

clayRouter.get('../claySeed', (req, res) => {
    Clay.deleteMany({}, (error, allClays) => {});
        Clay.create(claySeed, (error, data) => {
            res.redirect('/clays');
        });
});
    

// Index
clayRouter.get('/', (req, res) => {
    Clay.find({}, (error, allClays) => {
        res.render('clays/index', {
            clay: allClays,
        });
    });
});

//New
clayRouter.get('/new', (req, res) => {
    res.render('clays/new');
}); 

// Delete Route
clayRouter.delete('/clays/:id', (req, res) => {
    Clay.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/clays');
    });
});

// Update
clayRouter.put('/:id', (req, res) => {
    Clay.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
      new: true
    }, (err, updatedClay) => {
      res.redirect(`/clays/${req.params.id}`)
    });
  });

// Create Route
clayRouter.post(`/clays`, (req, res) => {
    Clay.create(req.body, function (error, createdClay) {
      res.redirect(`clays/index`)
    });
});

// Show Page
clayRouter.get(`/clays/:id`, (req, res) => {
    Clay.findById(req.params.id, function (error, clay) {
        console.log(clay);
        // res.render(`/clays/show`, { clay })
    });
});

  //Edit
 clayRouter.get('/:id/edit', (req, res) => {
    Clay.findById(req.params.id, (error, foundClay) => {
        res.render('edit.ejs', {
            clay: foundClay
        });
    });
  });


// export functionality
module.exports = clayRouter;