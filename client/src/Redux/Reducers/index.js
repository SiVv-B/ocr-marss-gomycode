import UserReducer from "./UserReducer"
import IntervenantReducer from './IntervenantReducer'
import AuthReducer from "./AuthReducer"
import { combineReducers } from "redux"
const rootReducer = combineReducers({UserReducer:UserReducer , AuthReducer:AuthReducer, IntervenantReducer:IntervenantReducer})
export  default rootReducer
