import React from 'react'
import {useState,useEffect} from 'react'
import { Container,Row,Form, Button  } from 'react-bootstrap'
import { CgIfDesign } from 'react-icons/cg'
//import { signIn } from '../../../../back-end/controller/userController'
import { useDispatch,useSelector } from 'react-redux'
import Input from '../../input'
import { Redirect } from 'react-router'
import {login} from '../redux/action/userActions'



const Sginin = (props)=> {
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
    
    
        <div className="login">
                <h2 className="text-center mt-5 pt-4 connextion-title">CONEXION</h2>    
        
                        <Form style={{height:"200px",marginTop:"200px",marginLeft:"300px", backgroundColor:"#885d5d"}} onSubmit={userLogin}>
                           
                         
                        <Input   placeholder="Email" type="email" onChange={(e)=>{setEmail(e.target.value)}} />
                          
                             <Input  placeholder="Ecrivez votre mot de passe ici.."  type="password" onChange={(e)=>{setPassword(e.target.value)}} />
                            
                             <div className="d-flex justify-content-center">
                            <Button  className="my-auto top-btn mt-4" type="submit" variant="outline-dark">login</Button>
                           </div>
                             
                        </Form>
                
                
             
        
        </div>
    )
 }
export default Sginin