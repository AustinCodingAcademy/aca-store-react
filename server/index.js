const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://Joe_Cluster:cluster@cluster0-2avxp.mongodb.net/aca-store",
  { useNewUrlParser: true }
);

let orderRoute = require("../routes/orderRoute");
let productRoute = require("../routes/productRoute");

app.use(orderRoute);
app.use(productRoute);

const thePort = 3001;
app.listen(thePort, err => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for messages on port", thePort);
});
