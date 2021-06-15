// Dependencies
require('dotenv').config();
const express = require('express');
const app = express();


// Listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`serever is listening on port: ${PORT}`));
