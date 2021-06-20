const express = require('express');;
const router = require('express').Router();
const buildRouter = express.Router();
// const Clay = require('../models/clays');
// const Build = require('../models/build');
// // const Oil = require('../models/oils');

// enhancementRouter.get('../enhancementSeed', (req, res) => {
//     Enhancement.deleteMany({}, (error, allEnhancements) => {});
//         Enhancement.create(enhancementSeed, (error, data) => {
//             res.redirect('/enhancements');
//         });
// });
    

buildRouter.get('/', async (req, res) => {
    try {
        const ebuild = await Enhancement.find({});
        res.render('build/index', { enhancement });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

//New
buildRouter.get('/new', (req, res) => {
    res.render('new');
});

// Create Route
buildRouter.post(`/`, (req, res) => {
    Build.create(req.body, function (error, createdBuild) {
      res.redirect(`/build`)
    });
});

// Show Page
buildRouter.get(`/:_id`, (req, res) => {
    Build.findById(req.params.id, function (error, build) {
        res.render(`show.ejs`, { build })
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
module.exports = buildRouter;