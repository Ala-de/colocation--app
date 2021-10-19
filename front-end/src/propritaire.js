import React,{ useEffect }  from 'react'
  import {useSelector,useDispatch} from 'react-redux'
 import {signup}from'../../front-end/src/compoment/redux/action/userActions.js'
 
 
export default function Propritaire(){

    const auth = useSelector(state => state.registerStore)
  const dispatch = useDispatch()

useEffect(() => {
    dispatch((signup))
    },[]);
    return (
        <div>
           <section class="history-area"> 
            <p>
            nom :
            prenom:
            email :
           </p>
           </section>
        </div>
    )
}
