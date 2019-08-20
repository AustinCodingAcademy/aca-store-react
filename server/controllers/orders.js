let Order = require("../models/orders")

exports.create = function create(req, res){
    let order = new Order({
        userId: req.body.userId,
        items: req.body.cart
    })
    order.save().then(savedOrder =>{
        console.log(savedOrder)
    })
}