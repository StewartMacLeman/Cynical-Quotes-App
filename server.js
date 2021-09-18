require("dotenv").config();
const express = require("express");
const { MongoClient } = require("mongodb");
const mongodb = require("mongodb");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
// A difference!
app.use(bodyParser.urlencoded( {extended: true} ));
app.set("view engine", "ejs");
app.use(express.static("public"));

let database;
MongoClient.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
  database = client.db('cynical_quotes');
})

// Read -----------------------------------------------------------------------
  app.get('/', (req, res) => {
    database.collection("quotes").find().toArray((err, dbQuotes) => {
      res.render("index.ejs", { quotesArray: dbQuotes })
    })
  })

  // Create -------------------------------------------------------------------
  app.post("/add-quote", (req, res) => {
    database.collection("quotes").insertOne({quoter: req.body.quoter, quote: req.body.quote}, () => {
      res.redirect("/");
    })
  });

  // Update -------------------------------------------------------------------
  app.post("/update-quotes", (req, res) => {
    database.collection("quotes").findOneAndUpdate({_id: new mongodb.ObjectId(req.body.id)}, {$set: {quoter: req.body.quoter, quote: req.body.quote}}, () => {
      res.send("Success!");
    })
  });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`The app is running of port ${PORT}`);
})
