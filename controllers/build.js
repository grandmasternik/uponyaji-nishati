const express = require('express');;
const router = require('express').Router();
const Clay = require('../models/clays');
const Enhancement = require('../models/enhancements');
const Oil = require('../models/oils');
const Build = require('../models/build')


router.get('/', (req, res) => {
        res.render('build/index', { Build });
});

router.get('/new', (req, res) => {
    Build.find({}, (err, Build) => {
        res.render('build/new', { build });
    });
});

router.delete('/:id', (req, res) => {
   Build.findByIdAndDelete(req.params.id, (err, Build) => {
       res.redirect('/build');
   }); 
});

router.put('/:id', (req, res) => {
	Build.findByIdAndUpdate(req.params.id, req.body, () => {
		res.redirect(`/build/${req.params.id}`);
	});
});

router.post('/', (req, res) => {
    Build.create(req.body, (err, Build) => {
        res.redirect('/build');
    });
});


router.get('/:id', async (req, res) => {
    try {
        const build = await  Build.findById(req.params.id).populate('createdBy');
        res.render('build/show', { article });
    } catch (error) {
        console.log(error);
        res.redirect('/build');
    }
});

router.get('/:id/edit', (req, res) => {
    Build.findById(req.params.id, (err, Build) => {
        res.render('build/edit', { build });
    });
});



module.exports = router;