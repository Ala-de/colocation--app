import React from 'react'
import './App.css'
import { useState} from 'react';

import { useDispatch,useSelector } from 'react-redux'; 
import  { register} from "./compoment/redux/action/userActions"
import { useHistory } from 'react-router';
export default function ContactForm() {
  const dispatch = useDispatch()
  const [nom,setNom]=useState('')
  const [prenom,setPrenom]=useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setmessage] = useState('')
  const auth = useSelector(state => state.registerStore)
 
  const useRegister = (e) => {
    e.preventDefault()
    const user = {
      nom,
      prenom,
      email,
      password,
      message
    }
    dispatch(register(user))
    console.log(dispatch(register(user)))
    console.log(user)
  }




    return (
   <div className="Contact-Form">
     <section class="history-area">
<div className=" border">
<form onSubmit={useRegister}>
  <ul className="ul">
 
  <il><label  className="lab-input"className="lab-input">first Name:</label></il>  
  <input type="text" placeholder="first Name" onChange={(e)=>{setNom(e.target.value)}}/> 
  <il><label  className="lab-input"className="lab-input"  >Last Name:</label></il>  
  <input type="text" placeholder="Last Name"onChange={(e)=>{setPrenom(e.target.value)}}/> 
  
  
  <il><label  className="lab-input"className="lab-input" > E-mail:</label></il>  
  <input type='email'placeholder="E-mail"onChange={(e)=>{setEmail(e.target.value)}}/>

  <il><label  className="lab-input"className="lab-input">message:</label></il>  
  <input type="text" placeholder="message" onChange={(e)=>{setmessage(e.target.value)}}/> 
  <il><label  className="lab-input"className="lab-input">password:</label></il>  
  <input type="password" placeholder="password"onChange={(e)=>{setPassword(e.target.value)}}/> 
  

  <il> <button className="btn-contact" onSubmit={useRegister} >  <a href="/Profile">Submit</a ></button>  </il></ul>
</form>
  </div>

</section>
     </div>   
    )
}

