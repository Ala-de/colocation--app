import { fetchAllHouses,fetchAddHouse,fetchdeleteHouse } from "../../request/REQUEST";
import axios from "axios";

 
export function getAllHouses() {
 
    return dispatch => {
      fetchAllHouses()
        .then(house =>dispatch (
            {type: "GET_HOUSE_SUCCED",payload: house}) 
        )
       

        .catch(err=>dispatch( {
            type: "GET_ALL_HOUSES_FAILED",
            payload: err
          }))
    }

}
export const addHouse = (type,prix,adress,telephone,image,description) => async (dispatch) =>{
    try{
        const res = await fetchAddHouse(type,prix,adress,telephone,image,description);
        dispatch ({
            type:"ADD_HOUSE_SUCCED",     
            payload:res.data
        })
        console.log("payload")
    }
    catch (error) {
              console.log(error);
             }}

   /*  export function getAllHouses() {
                return dispatch => {
                    fetchAllEvents()
                    .then (house =>dispatch (
                        {type: "GET_HOUSE_SUCCEDED",payload: house})
                    )
                    .catch(err=>dispatch( {
                        type: "GET_HOUSE_FAILED",
                        payload: err
                      }))
                }
            }*/
    
            export const addEvent = (event) => ({
              type: "ADD_EVENT",
              payload: event,
          });
            export const deleteHouse = (_id)=> async (dispatch) => {
                try {
                  await fetchdeleteHouse (_id);
                  dispatch({
                    type:"DELETE_House",
                    payload:_id
                })
                  console.log("delete")
                  dispatch(getAllHouses);
                } catch (error) {
                  console.log(error);
                }
              };
              
              //update a booking
export const updateHouse= (
  _id,
  titre,
  type,
  image ,
  description,
prix,
adress,
telephone,) => async (dispatch) => {
  try {
    const res = await axios.put(`http://localhost:8000/colocs/updateHouse/${_id}`,{  
      titre,
      type,
      image,
      description,
      prix,
      adress,
      telephone}) 
     .then ((res)=>window.location.reload());

    dispatch({
      type: "UPDATE_House", 
      payload: res.data
    });
    console.log("update")
  } catch (error) {
    console.log(error);
  }
};
//getHousesById BY ID

export const  getHousesById= (_id) => async (dispatch) =>  {
  try{    
      const res= await axios.get(`http://localhost:8000/app/colocs/getHousesById/${_id}`)
      dispatch({
          type:"GET_HousesbyID_SUCCEDED",
          payload:res.data

      })
      console.log("Get Houses by ID", res.data)

      }
      catch (error) {
          console.log(error);
       }
} 