const express = require("express");
const app = express();
const cors=require('cors');
app.use(cors());
var mongo = require('mongodb');


require("dotenv").config();
const mongoose = require("mongoose");

const movieSchema = {
  title: String,
  description: String,
  trailer: String,
  thumbnail: String,
};

const conn = mongoose.createConnection(process.env.MONGO_URI, (err) => {
  if (err) {
    console.log("Error while connection to mongodb\n" + err);
  } else {
    console.log("connected to mongodb");
  }
});

const Movie = conn.model("movies", movieSchema);
const port = process.env.PORT || 7000;

app.get("/api/v1/movies", function (req, res) {
  Movie.find({}, function (err, docs) {
    // console.log(docs);
    res.send(docs);
  });
});

app.get("/api/v1/movie/:movieid", function (req, res) {
  Movie.find({
    "_id": mongo.ObjectId(req.params.movieid),
  }, function (err, docs) {
    console.log(docs);    
    res.send(docs);
  });
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
