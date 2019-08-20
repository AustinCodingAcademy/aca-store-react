const mongoose = require("mongoose");

let orderSchema = new mongoose.Schema ({
    id: Number,
    name: String,
    description: String,
    reviews: Number,
    rating: Number,
    imgurl: String,
    price: String
});

let Order = mongoose.model('Order', orderSchema);

module.exports = Order;