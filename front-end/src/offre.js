import React, { useState } from 'react'
import { Checkbox } from 'react-input-checkbox';

import './App.css';
import IMGcard1 from "./IMAGES/cardimage.png"
import IMGcard2 from "./IMAGES/cardimage2.jpg"
import IIMGcard3 from "./IMAGES/cardimage3.jpg"
import IMGcard4 from "./IMAGES/cardimage4.jpg"

import {Button,FormControl,Form} from 'react-bootstrap'
import { Link, } from 'react-router-dom';
import {useSelector} from 'react-redux';
import {fetchAddHouse}  from './compoment/request/REQUEST';
import {getAllHouses, getHousesById} from "../../front-end/src/compoment/redux/action/HOUSEAction"
import {useDispatch} from "react-redux"
import { useEffect } from 'react';
import { addHouse } from '../../front-end/src/compoment/redux/action/HOUSEAction';
import {deleteHouse} from '../../front-end/src/compoment/redux/action/HOUSEAction';
import ScrollUpButton from "react-scroll-up-button";
export default function Offrelogement() {

  const dispatch = useDispatch()
const [type,setType]=useState("")
const [prix,setPrix]=useState("")
const [adresse,setAdresse]=useState("")
const [image,setImage]=useState(null)
const [Image,setImgData]=useState(null)
const mapHouse = useSelector((state) => state.HouseStore.house);
const [input,setInput]=useState("")
const handelchange = (e) => {
  setInput(e.target.value)
}

const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
useEffect(() => {
dispatch(getAllHouses())
},[]);

const getOneHouse =(id)=> {
  dispatch(getHousesById(id))
  console.log("slmmmmmmmmmm",id)
  console.log("aaaaaa")
}

{/*
useEffect((id) => {
  dispatch(getHousesById(id));
},[]);
console.log("asasasas",getHousesById)*/}

 


    return (
        <div>
             <ScrollUpButton />
            <br>
            </br>
            <br>
            </br>
        <br>
        </br>
       
           <Form id="serch" className="input"  style={{maxWidth:"700px",marginLeft:"300px"}}>
      <FormControl className="inpserch"
        type="search"
        placeholder="Region/ville/cartier"
        className="input"
        aria-label="Search"
        onChange={handleChange}
     
      />
     
      
    </Form>
   

   <h2 className="text-aceuille mb-3">Consultez nos dernières offre à Tunis,</h2>
   
  
     
        
     
<div className="d-flex flex-wrap" style={{marginLeft:"80px"}}>
{mapHouse.filter((el)=>{
                                                            if((searchTerm ==="") ||(el.type.toLowerCase().includes(searchTerm.toLowerCase())) 
                                                    ){ 
                                                        return el
                                                }
                                                
                                            })
  
.map((el,key)=>(<div className="" style={{marginRight:"0px"}} key={key}>
<div className="">
<div class="card " style={{maxWidth:"500px"}}>
<div class="row no-gutters">
<div class="col-md-2">
<img  className="imgcard" src={el.image} class="card-img-offre" alt="..."/>
</div>
<div class="col-md-6">
<div class="card-body">
<h1 class="card-title">{el.type}</h1>
<p class="card-text justify-content-center" style={{marginLeft:"0px"}}></p>

<p class="card-text justify-content-center" style={{marginLeft:"0px"}}>
</p>
<p class="card-text justify-content-center" style={{marginLeft:"0px"}}>
</p>





<Link to={`/detail/${el._id}`}  ><Button variant="secondary" className="button-header" style={{marginRight:"150px"}} onClick={() => {getOneHouse((el._id) )}}>  détail</Button></Link> 

        
        
      

</div>                                                                                                                                                
</div>
</div>
</div>git push --set-upstream origin master
</div>
</div>))}</div>

</div>
)
}

