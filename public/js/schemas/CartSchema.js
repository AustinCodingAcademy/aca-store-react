const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    numberOfItemsInCart: Array
});

module.exports = cartSchema;