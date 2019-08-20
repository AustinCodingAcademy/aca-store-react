let Product = require("../models/products")

exports.list = function list(req, res) {
    Product.find((err,p)=>{
        return res.json(p);
    });
}

// exports.show = function show(req, res) {
//     Product.findById(req.params.id, (err,p)=>{
//        return res.json(p);
//    });
// }