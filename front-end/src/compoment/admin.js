import React, { useState } from 'react'

import '../App.css'
import {Button,FormControl,Form} from 'react-bootstrap'
import { Link, } from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getAllHouses} from "./redux/action/HOUSEAction";
import {useDispatch} from "react-redux"
import { useEffect } from 'react';
import { addHouse } from './redux/action/HOUSEAction';
import {deleteHouse} from './redux/action/HOUSEAction';
import { fetchAddHouse, updateHouse } from './request/REQUEST';
import { Edit } from './Edit';
import Publiervotreannonces from '../Publiervotreannonces';
export default function Offrelogement() {
  
  const dispatch = useDispatch()
  const mapHouse = useSelector(state=>state.HouseStore.house)
  
  const mapmessage = useSelector(state=>state.HouseStore.house)
  
const [image,setImage]=useState([]);
const [ImgData,setImgData]=useState([])
const [titre,setTitre]=useState("")
const [type,setType]=useState("")
const [prix,setPrix]=useState("")
const [description,setDiscription]=useState("")




useEffect(() => {
   dispatch(getAllHouses());
 },[]);
 console.log(mapHouse, "did we ?");

 const onChangePicture = (e) => {
  e.preventDefault();
  if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setImage(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
          setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
  }
};

const addtolist = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("image", image, image.name);
  formData.append("titre", titre);
  formData.append("description", description);
  formData.append("type", type);
  formData.append("prix", prix);

  const { data } = await fetchAddHouse(formData).catch((e) =>
      console.log("Error at ImageUpload", e)
  );

  if (data && data._id) dispatch(addHouse(data));

  formReset();
};
const deleteHou=(id)=>{
  dispatch(deleteHouse(id));
  console.log('eeeee',deleteHouse)
}
const formReset = () => {
  setTitre(""); 
  setDiscription("");
  setType("");
  setImage("");
  setPrix("");
};

    return (
        <div className="">
        <div className="col">
       
     
   
     <div className="col-md-4"> < Publiervotreannonces />
    <Link to={`/comentaire`}><Button variant="secondary" id="button-header" >  consulter message</Button></Link> 
    </div>
      
   
    </div>
    
   
         
<div className="d-flex flex-wrap col-md-8">
{mapHouse.map((el,_id)=>(
<div className="">
<div className=" AdminCard">
<div className="row">
<div className="card" style={{maxWidth:"550px"}}>
<div className="col-md-3 card-img ">
<img src={el.image} style={{width:"250px",marginLeft:"150px"}}/>
<div className="card-title">
  <h2>{el.titre}</h2>
  </div>
  <div className=''>
<h4 style={{color:"black"}}>{el.type}</h4>
</div>
<div className="card-body"style={{color:"red"}}>
  <p>{el.adress}</p>
</div>
</div>
<div className='col-md-6'>

<div className="d-block ">
<Edit el={el} _id={el._id} type="submit" placeholder="hiiiiiiiiiiiiiiiii" />
<button as="input" style={{width:"100px",color:"red"}}type="delete" value="delete"  id='button-header'  onClick={() => deleteHou(el._id)}>ye thkiiiii</button>
  </div>
</div>

</div>

</div>
</div>






</div>

))}
</div>






        </div>
    )
}
