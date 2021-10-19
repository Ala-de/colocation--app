import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { HouseReducer } from "./reducer/eventReducer"
import {userRegisterReducer} from "./reducer/userReducers"
import authReducer from "./reducer/authReducer"

const Reducers = combineReducers({
    HouseStore: HouseReducer,
    SamiStore:userRegisterReducer,
    auth:authReducer,
});
const store = createStore(Reducers, applyMiddleware(thunk));


export default store;