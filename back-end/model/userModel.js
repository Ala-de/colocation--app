const mongoose = require('mongoose')
const Schema = mongoose.Schema
module.exports = mongoose.model('users' , new Schema({
nom:{
    type:String,
},
prenom:{
    type:String,
},
email:{
    type:String,
},
password:{
    type:String,
},
message :{
    type:String,

},
role:{
    type:String,
    enum:["user","admin",],
default:"user"
}

}))