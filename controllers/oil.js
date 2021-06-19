const express = require('express');;
const router = require('express').Router();
const oilRouter = express.Router();
// const Clay = require('../models/clays');
// const Enhancement = require('../models/enhancements');
const Oil = require('../models/oils');

oilRouter.get('../oilSeed', (req, res) => {
    Oil.deleteMany({}, (error, allOils) => {});
        Oil.create(oilSeed, (error, data) => {
            res.redirect('/oils');
        });
});
    

oilRouter.get('/', async (req, res) => {
    try {
        const oilt = await Oil.find({});
        res.render('oils/index', { Oil });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

//New
oilRouter.get('/new', (req, res) => {
    res.render('new');
});

// Create Route
oilRouter.post(`/`, (req, res) => {
    Oil.create(req.body, function (error, createdOil) {
      res.redirect(`/oils`)
    });
});

// Show Page
oilRouter.get(`/:_id`, (req, res) => {
    Oil.findById(req.params.id, function (error, oil) {
        res.render(`show.ejs`, { oil })
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
module.exports = oilRouter;