let ProductModel = require("../models/product.js")

exports.list = function list(request, response) {
    ProductModel.find((e, p) => {
        return response.json(p);
    });
}
exports.show = function show(request, response) {
    ProductModel.findById(request.params.id, (err, p) => {
        return response.json(p);
    });
}
exports.create = function create(request, response) {
    let newProduct = new ProductModel(request.body);
    newProduct.save(() => {
        return response.json(newProduct);
    });
}