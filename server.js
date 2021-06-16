// Dependencies
require('dotenv').config();
const express = require('express');
const app = express();

// Configure Mongoose
const mongoose = require('mongoose');
const db = mongoose.connection;

// Index Route
app.get("/", (req, res) => {
    res.render("index.ejs");
});

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
