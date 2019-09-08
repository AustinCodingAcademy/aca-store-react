const mongoose = require("mongoose");
const productSchema = require("../schemas/ProductSchema.js")

var Product = mongoose.model('Product', productSchema);

module.exports = Product;