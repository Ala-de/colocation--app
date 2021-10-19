const mongoose = require('mongoose')
const db_connection = () =>{
    mongoose.connect('mongodb+srv://Ala:123321@cluster0.foozx.mongodb.net/colocsdb?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      }
    )
 .then(() =>{ console.log('data_base connected')})
    .catch(()=>{console.log('error bch tetarcheg')})

    
} 
module.exports = db_connection