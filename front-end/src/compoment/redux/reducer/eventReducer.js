const houseState = {
    house: [],
};

export const  HouseReducer = (state = houseState, action) => {
    const { type, payload } = action;
    switch (action.type) {
        case "GET_HOUSE_SUCCED":
          state =   {...state,
                house: payload
            };
            
            break;
            
        case "ADD_HOUSE":
            return{
                ...state,
                house: [...state.house, payload]
            }
               
           
            break;
                case "DELETE_House":
                    state =  {
                      ...state,
                      house: state.house.filter(
                        house => house._id !== payload
                      )
                      }
                   
                       
                   
        };
        return state
        }
   