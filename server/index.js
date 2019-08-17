const express = require("express");
const app = express();
app.use(express.static("public"));
let productsRoutes = require("./routes/products");
let mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://alaynapuck28:<password>@cluster0-3umzc.mongodb.net/aca-store-react",
  { useNewUrlParser: true }
);

app.use("/products", productsRoutes);

const thePort = 3001;
app.listen(thePort, err => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for messages on port", thePort);
});
