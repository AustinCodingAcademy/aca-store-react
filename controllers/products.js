const Product = require('../models/ProductModel')

exports.list = function list(req, res){
    Product.find(function(err,products){
        if(err) {
            console.log(err)
        }
        else {
            res.json(products)
        }
    })
};

exports.create = function create(req, res){
    let newProduct = new Product(req.body);
    newProduct.save();
    res.json(newProduct)
}