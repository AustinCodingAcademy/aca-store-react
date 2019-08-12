const mongoose = require("mongoose");

let orderSchema = new mongoose.Schema ({
    name: String
});

let Order = mongoose.model('Order', orderSchema);

module.exports = Order;