const express= require('express');
const bodyParser= require('body-parser');
const productsRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders')
const mongoose = require('mongoose')

//const ItemRoutes = require('./routes/Items')

mongoose.connect('mongodb://GChivas:smitty5smitty5@cluster0-shard-00-00-e2mbo.mongodb.net:27017,cluster0-shard-00-01-e2mbo.mongodb.net:27017,cluster0-shard-00-02-e2mbo.mongodb.net:27017/aca-store-react-db?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', {useNewUrlParser: true})
.then(console.log("Connected to database.."))
.catch(err=>console.log(err))

let app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(productsRoutes, orderRoutes)


const PORT = process.env.PORT || 4000

app.listen(PORT, (err)=>{
    if(err){
        console.log("Nothing here", err)
    };
        console.log("Server is listening on port 4000...")
})