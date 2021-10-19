const USER = require('../model/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

module.exports={
addUser:async(req,res)=>{
    const nom = req.body.nom
    const prenom = req.body.prenom
    const email = req.body.email
    const message =req.body.message 
    
    const salt = await bcrypt.genSalt(10);
    const hashedPasswor = await bcrypt.hash(req.body.password, salt);
    const password = hashedPasswor;
    try{
        const user = await new USER({
            nom,prenom, email,password,message
        })
        await user.save()
       
        res.json(user)
 
    }
    catch(err){
        console.log(err)
    }
},

signIn:async(req,res)=>{
    USER.findOne({email:req.body.email})
    .exec((error,user)=>{
        if(error){
            return res.status(400).json({error}) }
            if(user){
            const comp= bcrypt.compare(req.body.password, user.password   )
            if(comp)
            {
                    const token = jwt.sign({_id:user._id,role:user.role},'MEARNSECRET',{expiresIn:'1h'})
                    const {_id, nom,prenom,email,password,message} = user

                    res.status(200).json({

                        token,
                        user:{
                            _id, nom,prenom,email,password,message
                        }

                    })
                }else{
                    return res.status(400).json({
                        message:'Invalid Password'
                    })
                }

            }else{
                return res.status(400).json({message:'SomeThing went wrong !'})
            }

    })
} ,

getUsers:async(req,res)=>{
    
    try{
      
      const user = await USER.find()
       
        res.json(user)
 
    }
    catch(err){
        console.log(err)
    }

},


deleteUser:async(req,res)=>{
    
    try{
      
      const user = await USER.findByIdAndDelete(req.params.id)
       
        res.json(user)
 
    }
    catch(err){
        console.log(err)
    }},
    updateUser:async(req,res)=>{
    
        try{
          
          const user = await USER.findByIdAndUpdate(req.params.id,req.body,{new:true})
           
            res.json(user)
     
        }
        catch(err){
            console.log(err)
        }

    }


}