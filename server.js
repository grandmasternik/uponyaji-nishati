// Dependencies
require('dotenv').config();
const express = require('express');
const app = express();
const Clay = require("./models/clays");
const Enhancement = require("./models/enhancements");
const Oil = require("./models/oils");
// const build = require ("build.ejs")
// Configure Mongoose
const mongoose = require('mongoose');
const db = mongoose.connection;
const methodOverride = require('method-override');

// Seed
const claySeed = require('./models/claySeed.js');
const enhancementSeed = require('./models/enhancementSeed.js');
const oilSeed = require('./models/oilSeed.js');

//Body parser middleware: give us access to req.body
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride(`_method`))
// app.use(express.static('public'))

// Set default view engine
app.set('view engine', 'ejs');

// Home Route
app.get('/', (req, res) => res.render('index'));



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

// ==== Controller ==== / /
// const clayController = require('./controllers/clay');
app.use('/clays', require('./controllers/clay'));
app.use('/enhancements', require('./controllers/enhancement'));
app.use('/oils', require('./controllers/oil'));
// app.use('/build', require('./controllers/build'));

// Listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`serever is listening on port: ${PORT}`));
