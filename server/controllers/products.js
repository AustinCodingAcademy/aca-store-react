let product = require("../models/productModel")

exports.list =  function list(req, res) {
    product.find((e,product)=>{
        return res.json(product);
    });
 }
 exports.show = function show(req, res) {
    product.findById(req.params.id, (err,product)=>{
        return res.json(product);
    });
 }
 exports.create =  function create(req, res) {
    let newProduct = new product ({
         name: req.body.name,
         price: req.body.price,
    })
    newProduct.save(()=>{
        return res.json(newProduct);
    });
 }
