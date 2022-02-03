import React, { useEffect } from 'react'
import IntervUserCard from './IntervUserCard'
import {useSelector} from "react-redux" 
import { useDispatch } from 'react-redux'
import {AllIntervUsers} from '../../Redux/Actions/IntervenantActions'

 const IntervUserList = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(AllIntervUsers())
      }, [dispatch])

     const intervenants=useSelector(state=>state.IntervenantReducer.intervenants)
    console.log("liste des intervenants :", intervenants)
     return (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
            {intervenants.map((intervenant)=> <IntervUserCard key={intervenant._id} intervenant={intervenant}/>)}

           
        </div>
    )
}
export default IntervUserList