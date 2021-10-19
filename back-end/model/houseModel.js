const mongoose = require('mongoose')
const house = new mongoose.Schema
({

    userId:{
        type:mongoose.Types.ObjectId
    },
    titre:{
        type:String,
        
    },
type:{

    type:String,
    
   
},
image:{ 
    type:String,
    
},

prix:{
    type:String,
    
},
adress:{
    type:String,
    
},
telephone:{
    type:String,
    
},
description:{
    type :String,
}

});
module.exports = houses = mongoose.model("houses",house)