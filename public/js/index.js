// let express = require("express");
// let productRoutes = require("./routes/productRoutes");

// const mongoose = require("mongoose");
// mongoose.connect('mongodb+srv://annieb:HEGiwOLFc6LnrrIP@cluster0-blr96.mongodb.net/test', { useNewUrlParser: true });


// const bodyParser = require("body-parser");
// const app = express();
// app.use(bodyParser.json());
// app.use(express.static("public"));

// const thePort = 3003;

// app.use(productRoutes);


// app.listen(thePort, (err) => {
//     if (err) {
//         return console.log("Error", err);
//     }
//     console.log("Web server is now listening for messages on port", thePort);
// });

ReactDOM.render(<App />, document.getElementById("root"));

