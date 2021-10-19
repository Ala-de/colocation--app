const HOUSE = require('../model/houseModel')
 
module.exports={
addHouse:async(req,res)=>{
    const titre=req.body.titre;
    const type = req.body.type;
    const image= req.body.image;

    const prix = req.body.prix;
    const adress = req.body.adress;
    const telephone = req.body.telephone;
    const description =req.body.description
  
    try{
        const house = await new HOUSE({
            titre,type,image,prix,adress,telephone,description
        })
        await house.save()
       
        res.json(house)
 
    }
    catch(err){
        console.log(err)
    }
},
getHouses:async(req,res)=>{
    
    try{
      
      const house = await HOUSE.find()
       
        res.json(house)
 
    }
    catch(err){
        console.log(err)
    }

},

getHousesById:async(req,res)=>{
    try {
      const house = await HOUSE.findById(req.params.id);
      res.json(house);
  }
  catch (error) {
      console.error(error.message);
      res.status(500).send("server error");
    }
  },

deleteHouse:async(req,res)=>{
    
    try{
      
      const house = await HOUSE.findByIdAndDelete(req.params.id)
       
        res.json(house)
 
    }
    catch(err){
        console.log(err)
    }},
    updateHouse:async(req,res)=>{
        
        try{
          
          const house = await HOUSE.findByIdAndUpdate(req.params.id,req.body,{new:true})
           
            res.json(house)
     
        }
        catch(err){
            console.log(err)
        }

    }


}