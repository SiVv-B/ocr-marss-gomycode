/* import React ,{useState}from "react"
import {addIntervenant} from "../../Redux/Actions/IntervenantActions"
import {useDispatch} from 'react-redux'
import {useNavigate} from "react-router"
import { Link } from "react-router-dom"


const AddIntervenantUser = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [intervenant,setIntervenant]=useState({
    Prenom: " ",
    Nom: " ",
    SelectedFile: " ",
    NSS: " ",
    NSuiviCarte:"",
    CarteIdentite:"",
    CarteVitale:"",
    DateDeNaissance:"",
    DateDerniereVisiteMedicale:"",
    VisiteMedicaleARenouvelerAvantLe:"",
    DateDerniereFicheDexposition:"",
    DateDerniereFicheDaptitude:"",
    Commentaire:" ",

  })
  const handleChange=(event)=>{
    setIntervenant({...intervenant,[event.target.id]:event.target.value})
  }
 const onSubmit=(event)=>{
  event.preventDefault()
  dispatch(addIntervenant(intervenant,navigate))
  setIntervenant({
    Prenom: " ",
    Nom: " ",
    SelectedFile: " ",
    NSS: " ",
    NSuiviCarte:"",
    CarteIdentite:"",
    CarteVitale:"",
    DateDeNaissance:"",
    DateDerniereVisiteMedicale:"",
    VisiteMedicaleARenouvelerAvantLe:"",
    DateDerniereFicheDexposition:"",
    DateDerniereFicheDaptitude:"",
    Commentaire:" ",

  })

 }
  return (
    <form onSubmit={onSubmit}>
    <div className="form-group">
    <label for="Nom">nom de l'intervenant</label>
    <input
      onChange={handleChange}
      type="text"
      className="form-control"
      id="Nom"
      value={intervenant.Nom}
    />
  </div>
  <div className="form-group">
    <label for="Prenom">Prénom</label>
    <input
      onChange={handleChange}
      type="text"
      className="form-control"
      id="Prenom"
      value={intervenant.Prenom}
    />
  </div>
  <div className="form-group">
    <label for="SelectedFile">image/photo</label>
    <input
      onChange={handleChange}
      type="text"
      className="form-control"
      id="SelectedFile"
      value={intervenant.SelectedFile}
    />
  </div>
  <div className="form-group">
    <label for="NSS">N°SS</label>
    <input
      onChange={handleChange}
      type='number'
      className="form-control"
      id="NSS"
      value={intervenant.NSS}
    />
  </div>
  <div className="form-group">
    <label for="NSuiviCarte">N° Suivi de Carte</label>
    <input
      onChange={handleChange}
      type='number'
      className="form-control"
      id="NSuiviCarte"
      value={intervenant.NSuiviCarte}
    />
  </div>
  <div className="form-group">
    <label for="CarteVitale">N° Carte Vitale</label>
    <input
      onChange={handleChange}
      type='number'
      className="form-control"
      id="CarteVitale"
      value={intervenant.CarteVitale}
    />
  </div>
  <div className="form-group">
    <label for="DateDeNaissance">Date de naissance</label>
    <input
      onChange={handleChange}
      type='date'
      className="form-control"
      id="DateDeNaissance"
      value={intervenant.DateDeNaissance}
    />
  </div>
  <div className="form-group">
    <label for="CarteIdentite">N° Carte d'Identité</label>
    <input
      onChange={handleChange}
      type='number'
      className="form-control"
      id="CarteIdentite"
      value={intervenant.CarteIdentite}
    />
  </div>
  <div className="form-group">
    <label for="DateDerniereVisiteMedicale">Dernière date de visitie médicale</label>
    <input
      onChange={handleChange}
      type='date'
      className="form-control"
      id="DateDerniereVisiteMedicale"
      value={intervenant.DateDerniereVisiteMedicale}
    />
  </div>
  <div className="form-group">
    <label for="VisiteMedicaleARenouvelerAvantLe">Visitie médicale à renouvler avant </label>
    <input
      onChange={handleChange}
      type='date'
      className="form-control"
      id="VisiteMedicaleARenouvelerAvantLe"
      value={intervenant.VisiteMedicaleARenouvelerAvantLe}
    />
  </div>
  <div className="form-group">
    <label for="DateDerniereFicheDexposition">Date dernière fiche d'éxposition </label>
    <input
      onChange={handleChange}
      type='date'
      className="form-control"
      id="DateDerniereFicheDexposition"
      value={intervenant.DateDerniereFicheDexposition}
    />
  </div>
  <div className="form-group">
    <label for="DateDerniereFicheDaptitude">Date dernière fiche d'aptitude </label>
    <input
      onChange={handleChange}
      type='date'
      className="form-control"
      id="DateDerniereFicheDaptitude"
      value={intervenant.DateDerniereFicheDaptitude}
    />
  </div>
  <div className="form-group">
    <label for="Commentaire">Commentaire</label>
    <input
      onChange={handleChange}
      type='text'
      className="form-control"
      id="Commentaire"
      value={intervenant.Commentaire}
    />
  </div>
  
        <button className="btn btn-primary" >Ajouter un intervenant</button>
       
    </form>
  )
}

export default AddIntervenantUser
 */