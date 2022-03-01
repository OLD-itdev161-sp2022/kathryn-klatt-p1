const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json()); // Middleware

//Import Routers
const postsRoute = require('./routes/posts');
app.use ('/posts', postsRoute);


//Routes
app.get("/", (req, res) => {
  res.send("We are home.");
});

//Connect to DB
mongoose.connect(
  process.env.DB_Connection, {userNewUrlParser:true},
  () => console.log("Connected to DB!"));

//Listener
app.listen(3000);