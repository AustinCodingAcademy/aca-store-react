const mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    reviews: Number,
    rating: Number,
    imgurl: String,
    price: String
});

let Product = mongoose.model('Product', productSchema);

module.exports = Product;