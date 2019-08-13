const express= require('express');
const bodyParser= require('body-parser');
//const ItemRoutes = require('./routes/Items')

//mongoose.connect('mongodb+srv://GChivas:smitty5smitty5@cluster0-e2mbo.mongodb.net/mernshoppinglist?retryWrites=true', {useNewUrlParser: true})
//.then(console.log("Connected to database.."))
//.catch(err=>console.log(err))

let app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
//app.use(ItemRoutes)


const PORT = process.env.PORT || 4000

app.listen(PORT, (err)=>{
    if(err){
        console.log("Nothing here", err)
    };
        console.log("Server is listening on port 4000...")
})