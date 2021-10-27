

import React,{useState, useEffect} from 'react'
import { Container,Row,Form, Button } from 'react-bootstrap'
import Input from "../../input"
import { signup} from '../redux/action/userActions'
import {useDispatch,useSelector} from 'react-redux'
import { Redirect } from 'react-router-dom'
import {login} from '../redux/action/userActions'
import {FaUserAlt} from "react-icons/fa"
import {RiLockPasswordFill} from "react-icons/ri"
import admin from "../admin"
const Signup = (props) => {


 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [error, setError] = useState('')
 const auth = useSelector(state =>state.auth)
 //const user = useSelector(state =>state.auth.user)

 const dispatch = useDispatch()

 const userLogin =(e)=>{
 e.preventDefault()
 const user = {
     email,
     password
 }
 dispatch(login(user))
 
}
if(auth.authenticate){
 return <Redirect to="/admin"/>
}
   return (
       <div className="authtification">
         
       
           <div className="container box-container">
        <div className="form-box">
        <h2 className="text-center mt-5 pt-4 connextion-title">S'IDENTIFIER</h2>    
          <div className="header-form">
            <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px", color:"black"}}></i></h4>
            <div className="image">
            </div>
          </div>
          <div className="body-form">
           <form onSubmit={userLogin}>
              <div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"><FaUserAlt/></span>
  </div>
  <input type="text" className="form-control" placeholder="Email"  onChange={(e)=>{setEmail(e.target.value)}}/>
</div>
 <div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"><RiLockPasswordFill/></span>
  </div>
  <input type="text" className="form-control" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
</div>
 <button type="submit" className="btn btn-secondary btn-block">LOGIN</button>
 <div className="message">
 <div><a href="#" style={{ color:"black"}}>Forgot your password</a></div>
 <div><a href="/contact"style={{ color:"black"}}>s'inscrire </a></div>
 </div>
   </form>
            <div className="social">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter-square"></i></a>
              <a href="#"><i className="fab fa-google"></i></a>
            </div>
          </div>
        </div>
       </div>   
 
      


           
       </div>
   )
 }
 
 export default Signup
 
 