// Dependencies
require('dotenv').config();
const express = require('express');
const app = express();
const Clay = require("./models/clays");
// Configure Mongoose
const mongoose = require('mongoose');
const db = mongoose.connection;
const methodOverride = require('method-override');

// Seed
const claySeed = require('./models/claySeed.js');


//Body parser middleware: give us access to req.body
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride(`_method`))
// app.use(express.static('public'))

// Set default view engine
app.set('view engine', 'ejs');


app.get('/claySeed', (req, res) => {
Clay.deleteMany({}, (error, allClays) => {});
    Clay.create(claySeed, (error, data) => {
        res.redirect('/clays');
    });
});


// Index Route
app.get('/', (req, res) => {
    Clay.find({}, (error, allClays) => {
        res.render('index', {
            clay: allClays,
        });
    });
});

//New
app.get('/clays/new', (req, res) => {
    res.render('new');
});

// Create Route
app.post(`/clays`, (req, res) => {
    Clay.create(req.body, function (error, createdClay) {
      res.redirect(`/clays`)
    });
});
  
// Show Page
app.get(`/:id`, (req, res) => {
    Clay.findById(req.params.id, function (error, clay) {
        res.render(`show.ejs`, { clay })
    });
});

//Database 
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

db.on('connected', () => console.log('mongo connected'));
db.on('error', (err) => console.log(err.message, ' is mongo connected?'));
db.on('disconnected', () => console.log('mongo disconnected'));


// Listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`serever is listening on port: ${PORT}`));
