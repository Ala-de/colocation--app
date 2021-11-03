import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';
import {Nav, Navbar,Button,link ,NavDropdown,Container} from 'react-bootstrap';
import { BiLogIn } from 'react-icons/bi';
import {GrFavorite}from 'react-icons/gr';
import {CgDarkMode}from 'react-icons/cg';
export default function Navigation() {
    return (
        <div>
          
   <Navbar  className="nav fixed-top bg-light" collapseOnSelect expand="lg" variant="dark" variant="dark" >

  <Navbar.Brand  id="logoo">  <img src =""/> COlOOCS </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
  
    <Navbar.Brand className="link"><Link to="/Acceuil">Acceuil</Link></Navbar.Brand>
  {/*<Navbar.Brand className="link"><Link to="/Propritaire"> prfil</Link></Navbar.Brand>*/}
  

  <Navbar.Brand className="link"><Link to ="/offre"><p style={{color:"#000"}}> Nos offres </p></Link></Navbar.Brand>
   
  {/*<Navbar.Brand className="link"> <Link to ="/ColocsTravailleurs">ColocsTravailleurs</Link></Navbar.Brand>*/}
  <Navbar.Brand className="link"> <Link to ="./ColocsEtudiants">à propos</Link></Navbar.Brand>
  <Navbar.Brand className="link"> <Link to ="/contactt">Contact</Link></Navbar.Brand>

  <div className="left" >  <Navbar.Brand className="link"><Link to ="/inscription"><BiLogIn/></Link>   </Navbar.Brand>
  
  <Navbar.Brand className="link"><Link to =""><GrFavorite/></Link>   </Navbar.Brand>
  <Navbar.Brand className="link"><Link to ="">   <CgDarkMode/></Link>   </Navbar.Brand> </div>
      
               
    </Nav>
 
 </Navbar.Collapse>

   
  
    
    
  {/* <Link to ="/sgininn"><p style={{color:"#000"}}>connexion</p></Link>*/}
    

  
</Navbar>




    
    </div>
        
    )
}
