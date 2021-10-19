import React,{ useEffect }  from 'react'
import './App.css';
import {getHousesById} from './compoment/redux/action/HOUSEAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


export default function Detail({id}) {
    
    const dispatch = useDispatch()
    const mapHouse = useSelector(state=>state.HouseStore.house)
    const mapdescription = useSelector(state=>state.HouseStore.house )
    useEffect(() => {
        dispatch(getHousesById(id))
        console.log("aloooooooooooooooooooooooooooooooooooooooooolouuuuuuuuuuuuuuuuuuuuuuuuuu")
           }, [dispatch._id])
       
   
    

    
    return (
        <div>
             
    
         
            
         
            <div className=" d-flex justify-content-evenly mt-5"  >
           <div className="d-flex justify-content-between  m-3"> 
           <div> 
               
           </div>
        
           <div>

          
<div>
            
<img  src={mapHouse.image} class="card-img-offre" />
<h1 class="card-title">{mapHouse.adresse}</h1> 
<h1 class="card-title">{mapHouse.type}</h1>      
<h1 class="card-title"> {mapHouse.titre}</h1> 
<h1 class="card-title"> {mapHouse.description}</h1> 

            </div>
        
         
      
            </div>


           </div>
            </div>
            
         
          
<div class="mapouter"><div class="gmap_canvas"><iframe width="400" height="577" id="gmap_canvas" src="https://maps.google.com/maps?q=cit%C3%A9%20tahrir&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://putlocker-is.org/%22%3Eputlocker"></a><br></br></div></div>


 </div>
 
 


      
    )
}
