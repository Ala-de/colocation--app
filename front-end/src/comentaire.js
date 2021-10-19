import React from 'react'
import { useDispatch,useSelector  } from 'react-redux';
import  useState from 'react';
import { useEffect } from 'react';
import { signup } from './compoment/redux/action/userActions';


export default function Comentaire() {
    const dispatch = useDispatch()
    const mapmessage = useSelector((state) =>state.SamiStore.insialState)
    
 console.log("aaaaaaaaaaaaaaaaaa",mapmessage)
  
  

 useEffect(() => {
    dispatch(signup())          
    },[]);
    return (
        <div>
            
{mapmessage.map((el)=>(

 <div>
<h1 class="card-title"> {el.nom}</h1> 
<h1 class="card-title"> {el.prenom}</h1>      
<h1 class="card-title">{el.email} </h1> 
<h1 class="card-title"> {el.message}</h1> 
</div>








))}

        </div>
    )
}
