const Order = require('../Models/orderModel');

exports.list = function list(req, res) {
    Order.find((err, v)=>{
        return res.json(v);
    });
}

exports.show = function show(req, res) {
    Order.findById(req.params.id, (err, v)=>{
        return res.json(v);
    });
}

exports.create = function create(req, res) {
    let item = {name: req.body.name}
    let newOrder = new Order(item);
    newOrder.save();
}