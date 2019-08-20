const express = require('express')
const app = express()
app.use(express.static("public"));
const bodyParser = require("body-parser");
app.use(bodyParser.json());
let productsRoutes = require("./routes/products")
let usersRoutes = require('./routes/users')
let ordersRoutes = require('./routes/orders')
let mongoose = require("mongoose");
mongoose.connect('mongodb+srv://selenasolis:Ss-419057@selena-practice-s1rzj.mongodb.net/aca-store-react-1', {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);

app.use('/products', productsRoutes)
app.use('/users', usersRoutes)
// app.use('/orders', ordersRoutes)

const thePort = 3001
app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});