let User = require("../models/users")

exports.show = function list(req, res) {
    User.find({name: 'Selena'}, (err,u)=>{
        return res.json(u[0]);
    });
}

exports.create = function create(req, res){
    let user = new User({
        name: req.body.name,
        cart: []
    })
    user.save().then(savedUser =>{
        console.log(savedUser)
    })
}

exports.updateCart = function updateCart(req,res){
    User.findByIdAndUpdate(req.body._id, req.body, (err, user)=>{
        console.log(req.body._id)
        return res.json(user);
    })

    // let user = User.find({name: 'Selena'})[0];
    // User.findOneAndUpdate({}, user, function(err, user){
    //     user.cart = req.body
    //     user.save().then(savedCart =>{
    //         console.log(savedCart);
    //     })
    // });
}