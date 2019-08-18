let express = require("express");
let orderRoute = require("./routes/orders");
let productRoute = require("./routes/products");



const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(orderRoute);
app.use(productRoute);


mongoose.connect('mongodb+srv://daniela-idara:ZxTBIxnIsCjk4lDb@cluster0-wfeqq.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Success!");
});

const thePort = 3001;
app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});
