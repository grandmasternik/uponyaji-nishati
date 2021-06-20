const express = require('express');;
const router = require('express').Router();
const clayRouter = express.Router();
const Clay = require('../models/clays');
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

// Create Route
clayRouter.post(`/`, (req, res) => {
    Clay.create(req.body, function (error, createdClay) {
      res.redirect(`clays/index`)
    });
});

// Show Page
clayRouter.get(`/:_id`, (req, res) => {
    Clay.findById(req.params.id, function (error, clay) {
        res.render(`clays/show`, { clay })
    });
});
 
// // Edit Route
// clayRouter.get('/:id/edit', (req, res) => {
//     Clay.findById(req.params.id, (error, foundClay) => {
//         res.render('edit.ejs', {
//             clay: foundClay
//         });
//     });
// });

// // Update
// clayRouter.put('/:id', (req, res) => {
//     if (req.body.readyToEat === 'on') {
//         req.body.readyToEat = true;
//     } else {
//         req.body.readyToEat = false;
//     }
//     res.send(req.body);
// });

// // Delete Route
// clayRouter.delete('/:id', (req, res) => {
//     Clay.findByIdAndRemove(req.params.id, (err, data) => {
//         res.redirect('/clays');
//     });
// });

// export functionality
module.exports = clayRouter;