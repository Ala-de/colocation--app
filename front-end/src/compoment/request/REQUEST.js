import axios from "axios";
import { getHousesUrl, addHouseUrl } from "./URL";

/******* ******** get   *********************** */
export const fetchAllHouses = async () => await axios.get(getHousesUrl,{
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }).then(res=>res.data)





/******** ******* post  *************************************** */

export const fetchAddHouse = (type, adress,prix ,telephone,image,description) =>
axios.post(addHouseUrl,{type, adress, prix,telephone ,image,description })
     .then(res=>res.data)
     .then(res => window.location.reload());

/*********** delet************************** */

    export const fetchdeleteHouse =(_id)=>{
    axios.delete(`http://localhost:8000/colocs/deleteHouse/${_id}`)
    .then(res=>res.data)
    .then(res=> window.location.reload()) ;
}

/*********** edit***************** */
export const updateHouse = (id ,type, adress,prix ,telephone,image,description,
    
 ) => async dispatch => {
  try {
    const res = await updateHouse(id ,type, adress,prix ,telephone,image,description) 
     
    dispatch({
      type:  'REACT_APP_DELETE_House', 
      payload: res.data
    });
    console.log("changed", )
  } catch (error) {
    console.log(error);
  }
};

/***************get house by id************** */

