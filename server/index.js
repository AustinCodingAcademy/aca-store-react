const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json())
app.use(express.static('public'))

let productRoutes = require("./Routes/productRoutes");
let orderRoutes = require('./Routes/orderRoutes');

app.use(productRoutes);
app.use(orderRoutes);

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user-1:12345@aca-practice-jd9cz.mongodb.net/aca-store-react?retryWrites=true&w=majority', {useNewUrlParser: true});

app.listen(3002, (err) => {
  if (err) {
    return console.log("Error", err);
  }
});