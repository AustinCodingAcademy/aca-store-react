const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema ({
    id: Number,
    name: String,
    description: String,
    reviews: Number,
    rating: Number,
    imgUrl: String,
    price: String
})

let Product = mongoose.model('Product', productSchema);

module.exports = Product;