const inisialState ={
    token:null,
    user:{
        nom:'',
        prenom:'',
        email:'',
      


    },
    authenticate:false,
    authenticating:false ,

}

 const authReducer = (state =inisialState,action)=>{
    const { type, payload } = action;
  switch (type){
     case" LOGIN_FAILED":
        state = {
            ...state,
             authenticating:false


           }
           break
           case 'LOGIN_SUCCESS':
               state ={
                   ...state,
                   user:action.payload.user,
                   token:action.payload.token,
                   authenticate:true
               }

               break

                   case 'LOGOUT_SUCCESS':
                    state={
                        ...inisialState
                    }
                    break


           default:

        }

 return state
};
export default authReducer