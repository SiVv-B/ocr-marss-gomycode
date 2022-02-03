import {
  ADD_USER,
  GET_ALL_USERS,
  UPDATE_USER,
  GET_USER,
  DELETE_USER,
 
} from '../Actions/ActionTypes'
const initialState = {
  users: [], user:null, updatedUser:null,message: ' hello', loading: true, isAuth: false,}
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER :
      localStorage.setItem("token", action.payload.token)
      return {...state,user:action.payload.newUser,loading:false,isAuth:true}
    case GET_ALL_USERS:
      return { ...state, users: action.payload }
    case UPDATE_USER:
      return { ...state, user: action.payload }
   /* ou bien; user : action.payload  */
      case GET_USER:
      return { ...state, user: action.payload, message: 'get users works' }
      default:
      return state
  
  }
}
export default UserReducer

//GET_SINGLE_USER --> action.payload.user essayer de travailler avec GET_USER de AuthReducer
