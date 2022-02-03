/* import React ,{ useEffect}from "react";
import { useSelector ,useDispatch} from "react-redux";
import {getOneIntervenant} from "../../Redux/Actions/IntervenantActions"
import { useParams } from "react-router";

const IntervUserProfile = () => {
  console.log("hello from singleuser")
    const dispatch=useDispatch()
    const {id}=useParams();
    console.log("IntervenantID",id)
    const intervenant=useSelector(state=>state.IntervenantReducer.intervenant)
    console.log("intervenant: from single intervenant",intervenant)

    useEffect(()=>{
  dispatch(getOneIntervenant(id)) 
    },[dispatch])

   if(!intervenant){
       return 'loading'
   }
  return (
    <div className="card" style={{width: '18rem'}}>
      <div className="card-body">
        <p className="card-title">{intervenant.Nom}</p>
        <p className="card-text"> {intervenant.Prenom} </p>
        <img className="card-img-top" src={ intervenant.SelectedFile} alt="intervenant image"/>          
        <p className="card-text"> {intervenant.NSS}</p>
        <p className="card-text"> {intervenant.NSuiviCarte}</p>
        <p className="card-text"> {intervenant.CarteIdentite}</p>
        <p className="card-text"> {intervenant.CarteVitale}</p>
        <p className="card-text"> {intervenant.DateDeNaissance}</p>
        <p className="card-text"> {intervenant.DateDerniereVisiteMedicale}</p>
        <p className="card-text"> {intervenant.VisiteMedicaleARenouvelerAvantLe}</p>
        <p className="card-text"> {intervenant.DateDerniereFicheDexposition}</p>
        <p className="card-text"> {intervenant.DateDerniereFicheDaptitude}</p>
        <p className="card-text"> {intervenant.Commentaire}</p>
   



        
     
      </div>
    </div>
  );
};

export default IntervUserProfile
 */