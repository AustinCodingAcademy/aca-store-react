const Product = require("../Models/productModel");

exports.list = function list(req, res) {
    Product.find((err, v)=>{
        return res.json(v);
    });
}

exports.show = function show(req, res) {
    Product.findById(req.params.id, (err, v)=>{
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
    };
    let newProduct = new Product(item);
    newProduct.save();
}