const mongoose = require("mongoose");
const cartSchema = require("../schemas/CartSchema.js")

var Cart = mongoose.model('Cart', cartSchema);


module.exports = Cart;