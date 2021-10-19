import React from 'react'
import './App.css';
import IMGcard5 from "./IMAGES/colocation.jpg"
import {Modal,Button} from 'react-bootstrap'
import { useState } from "react";
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import{addHouse} from './compoment/redux/action/HOUSEAction'
import { useDispatch, useSelector } from 'react-redux'
import {fetchAddHouse}  from './compoment/request/REQUEST';
import {getAllHouses} from "../../front-end/src/compoment/redux/action/HOUSEAction"
import { useEffect } from 'react';
import {AiFillPlusCircle}from 'react-icons/ai';


 function  Publiervotreannonces() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const dispatch = useDispatch()

    //Declaring form input's state
    const [input, setInput] = useState({
      type : "",
    Adresse : "",
    Telephone : "",
    prix :"",
    image:""
    }) 
   /* const [type,setType]=useState("")
    const [prix,setPrix]=useState("")
    const [adresse,setAdresse]=useState("")*/
   
    const mapHouse = useSelector((state) => state.HouseStore.house);
    
    
    useEffect(() => {
    dispatch(getAllHouses())
    },[]);
    console.log("did we ",mapHouse)

    // add to list
   /* const addtolist = async (e) => {
      e.preventDefault();
    
      const formData = new FormData();
   
      formData.append("type", type);
      formData.append("adresse", adresse);
      formData.append("prix", prix);
    
    
      const { data } = await fetchAddHouse(formData).catch((e) =>
        console.log("Error at ImageUpload", e)
      );
    
      if (data && data._id) dispatch(addHouse(data));
    
      formReset();
    };*/
    //NEW FORM
  /*  const formReset = () => {
      setType("");
      setAdresse("");
      setPrix("");
    };*/
    // recpt val input 
    const handelChange=(e)=>{
      const {name,value} = e.target
      setInput({
        ...input,
        [name] : value
      });

    }
    //Posting data to the db.json==============================
    const handelSubmit= () => {
      
       dispatch( addHouse(input.type, input.Adresse, input.prix, input.Telephone ,input.image))
       console.log('val input', input)
     }

    return (
        <div>
   

      <div className="button-formulaire container">
     <div className="row">
    
   
      <div>
        <div>
     
      <Button id='d-flex'style={{marginLeft:"980px"}} onClick={handleShow}>
      publier une offre <AiFillPlusCircle/>
      </Button>
      </div>
      <Modal show={show} onHide={handleClose}>

  
<Modal.Header closeButton>
<Modal.Title style={{color:"#000"}}>Postuler un logement </Modal.Title>
</Modal.Header>
<Modal.Body>
<Form onSubmit={handelSubmit}  style={{color:"#000"}}> 


<Form.Group controlId="formBasicPassword">
 <Form.Label>Type</Form.Label>
 <Form.Control type="text" placeholder="description"  name='type'
                style={{marginLeft:"0px",width:"450px"}}       onChange={handelChange}  />
</Form.Group>
<Form.Group controlId="formBasicPassword">
 <Form.Label> Adresse</Form.Label>
 <Form.Control type="text" placeholder="Adresse"  name='Adresse' 
                  style={{marginLeft:"0px",width:"450px"}}    onChange={handelChange}   />
</Form.Group>
<Form.Group controlId="formBasicPassword">
 <Form.Label>Prix</Form.Label>
 <Form.Control type="text" placeholder="prix"  name='prix' 
                  style={{marginLeft:"0px",width:"450px"}}     onChange={handelChange}  />
</Form.Group>

<Form.Group controlId="formBasicPassword">
 <Form.Label>Telphone</Form.Label>
 <Form.Control type="text" placeholder="telephone"  name='Telephone' value={input.Telephone} 
             style={{marginLeft:"0px",width:"450px"}}          onChange={handelChange}    />
</Form.Group>

<label for="avatar">Choose a profile picture:</label>

<input onChange={handelChange}  type="text"
       id="avatar" name="image" placeholder="choisir votre picture"  
       style={{marginLeft:"0px",width:"450px"}}   accept="image/png, image/jpeg"/>


<Button type='submit' variant="primary" onClick={handleClose} style={{marginLeft:"350px"}}>
 ajouter
</Button>
    
</Form>
</Modal.Body>

  

</Modal>


  
      
  </div>
    
  </div>
    
</div>
     
    




       </div> 
    )
}

export default  Publiervotreannonces
  