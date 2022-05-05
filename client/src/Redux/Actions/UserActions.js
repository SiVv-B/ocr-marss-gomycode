import {
  ADD_USER,
  GET_ALL_USERS,
  UPDATE_USER,
  GET_USER,

} from './ActionTypes'
import axios from 'axios'

export const GetUsers = () => async (dispatch) => {
  try {
    const response = await axios.get('/client/user')
    dispatch({ type: GET_ALL_USERS, payload: response.data.users })
  } catch (error) {
    console.log(error)
  }
}

export const addUser = (user) => async (dispatch) => {
  try {
    console.log(user)
    const response = await axios.post('/client/user', user)
    dispatch({ type: ADD_USER, payload: response.data })
  } catch (error) {
    console.log(error)
  }
}

export const deleteUser = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`/client/user/${id}`)
    dispatch(GetUsers())
  } catch (error) {
    console.log(error)
  }
}

export const updateUser = (id, user) => async (dispatch) => {
  try {
    const response = await axios.put(`/client/user/${id}`, user)
    console.log('from edit user action', response.data.user)
    dispatch({ type: UPDATE_USER, payload: response.data.user })
    dispatch(GetUsers())
  } catch (error) {
    console.log(error)
  }
}

/* export const getOneUser=(id)=>async(dispatch)=>{

  try {
    const response=await axios.get(`/client/user/${id}`)
    console.log("from userAction one user",response.data.userFound)
    dispatch({type:GET_USER,payload:response.data.userFound})
  } catch (error) {
    console.log(error)
  }
}
 */

export const getOneUser = (id) => async (dispatch) => {
  const config = {
    headers: {
      token: localStorage.getItem('token'),
    },
  }
  try {
    const response = await axios.get(`/client/user/${id}`, config)
    console.log('from userAction one user', response.data.userFound)
    dispatch({ type: GET_USER, payload: response.data.userFound })
  } catch (error) {
    console.log(error)
  }
}
