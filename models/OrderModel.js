const mongoose = require ('mongoose');

let orderSchema = new mongoose.Schema({
    name: String,
    description: String,
    reviews: Number,
    rating: Number,
    imgUrl: String,
    price: String
});

let Order = mongoose.model('Order', orderSchema)

module.exports = Order