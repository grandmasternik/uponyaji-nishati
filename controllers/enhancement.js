const express = require('express');;
const router = require('express').Router();
const enhancementRouter = express.Router();
// const Clay = require('../models/clays');
const Enhancement = require('../models/enhancements');
// const Oil = require('../models/oils');

enhancementRouter.get('../enhancementSeed', (req, res) => {
    Enhancement.deleteMany({}, (error, allEnhancements) => {});
        Enhancement.create(enhancementSeed, (error, data) => {
            res.redirect('/enhancements');
        });
});
    

enhancementRouter.get('/', async (req, res) => {
    try {
        const enhancement = await Enhancement.find({});
        res.render('enhancements/index', { enhancement });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

//New
enhancementRouter.get('/new', (req, res) => {
    res.render('new');
});

// Create Route
enhancementRouter.post(`/`, (req, res) => {
    Enhancement.create(req.body, function (error, createdEnhancement) {
      res.redirect(`/enhancements`)
    });
});

// Show Page
enhancementRouter.get(`/:_id`, (req, res) => {
    Enhancement.findById(req.params.id, function (error, enhancement) {
        res.render(`show.ejs`, { enhancement })
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
module.exports = enhancementRouter;