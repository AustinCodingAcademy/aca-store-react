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
    let item = {
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        reviews: req.body.reviews,
        rating: req.body.rating,
        imgurl: req.body.imgurl,
        price: req.body.price
    }
    let newOrder = new Order(item);
    newOrder.save();
}