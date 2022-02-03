import axios from "axios"
import {
    GET_ALL_INTERVENANTS,
    GET_INTERVENANT,
    UPDATE_INTERVENANT,
    ADD_INTERVENANT,
    DELETE_INTERVENANT,

    ADD_INTERVENANTUSER,
GET_ALL_INTERVENANTSUSER,
GET_INTERVENANTUSER,
UPDATE_INTERVENANTUSER,
 DELETE_INTERVENANTUSER,
   
  } from '../Actions/ActionTypes'

  export const AllIntervUsers = () => async (dispatch) => {
    try {
      const response = await axios.get("/client/toutintervenantsdesclients")
      dispatch({ type: GET_ALL_INTERVENANTSUSER, payload: response.data.intervenants })
    } catch (error) {
      console.log(error)
    }
  }
  

  export const profileIntervUser=(id)=>async(dispatch)=>{
    try {
      const response=await axios.get(`/intervenantduclient/${id}/${id}`)
      console.log("from Intervant Action one intervenant",response.data.intervenant)
      dispatch({type:GET_INTERVENANT,payload:response.data.intervenant})
    } catch (error) {
      console.log(error)
    }
  }
  


export const GetIntervenants = () => async (dispatch) => {
    try {
      const response = await axios.get("/client/intervenant")
      dispatch({ type: GET_ALL_INTERVENANTS, payload: response.data.intervenants })
    } catch (error) {
      console.log(error);
    }
  };
  export const addIntervenant = (newIntervenant,navigate) => async (dispatch) => {
    try {
      const response = await axios.post("/client/intervenant", newIntervenant);
dispatch(GetIntervenants())         
dispatch({ type: ADD_INTERVENANT, payload: response.data.intervenant }) 
/* comment navigate vers le profil de l'intervenant??? */
navigate(`/intervenantsListe`)
/* ou intervenants ou response.data */
    } catch (error) {
      console.log(error);
    }
  };
  export const deleteIntervenant = (id) => async (dispatch) => {
    try {
      const response = await axios.delete(`/client/intervenant/${id}`);
      dispatch(GetIntervenants()) 
/*       dispatch({ type: DELETE_INTERVENANT, payload: response.data.intervenant }) */

    } catch (error) {
      console.log(error);
    }
  };
  export const updateIntervenant = (id, intervenant) => async (dispatch) => {
    try {
      const response = await axios.put(`/client/intervenant/${id}`, intervenant);
      console.log("from actions single intervenant",response.data.intervenant)
       dispatch(GetIntervenants()) 
      dispatch({type:UPDATE_INTERVENANT,payload:response.data.intervenant})
    } catch (error) {
      console.log(error);
    }
  };
  export const getOneIntervenant=(id)=>async(dispatch)=>{
    try {
      const response=await axios.get(`/client/intervenant/${id}`)
      console.log("from Intervant Action one intervenant",response.data.intervenant)
      dispatch({type:GET_INTERVENANT,payload:response.data.intervenant})
    } catch (error) {
      console.log(error)
    }
  }
  
  