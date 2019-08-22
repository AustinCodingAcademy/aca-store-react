const mongoose = require ('mongoose');

let productSchema = new mongoose.Schema({
    name: String,
    description: String,
    reviews: Number,
    rating: Number,
    imgUrl: String,
    price: String
});

let Product = mongoose.model('Product', productSchema)

module.exports = Product