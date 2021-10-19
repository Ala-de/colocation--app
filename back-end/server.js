const express = require('express')
const app = express()
const db = require('./config/db')
db();
app.use(express.json())

const cors = require('cors')
app.use(cors())
const user = require('./route/userRoute')
app.use('/colocs',user)


const house = require('./route/houseRoute')
app.use('/colocs',house)   



app.listen(8000,()=>{
    console.log('server yekhdem')
})