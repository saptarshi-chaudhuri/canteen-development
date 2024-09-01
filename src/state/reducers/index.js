import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import userDetailReducer from "./userDetailReducer";


const reducers= combineReducers({
    login: loginReducer,
    setdetail: userDetailReducer
})

export default reducers;