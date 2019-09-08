const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    reviews: Number,
    rating: Number,
    imgURL: String,
    price: String,
});

module.exports = productSchema;