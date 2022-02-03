import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import { deleteIntervenant, profileIntervUser, updateIntervenant } from "../../Redux/Actions/IntervenantActions"

const IntervUserCard = ({ intervenant }) => {
   console.log("hello from IntervenantCard")
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const [updatedIntervenant, setupDated] = useState({
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
  const handleChange = (event) => {
    setupDated({ ...updatedIntervenant, [event.target.id]: event.target.value })
  }
  const handleClick = () => {
    dispatch(deleteIntervenant(intervenant._id))
  }
  const handleEdit = () => {
    if (show) {
      setShow(false)
    } else {
      setShow(true)
    }
  }
  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(updateIntervenant(intervenant._id, updatedIntervenant))
    setupDated({ 
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
    setShow(false)
  }
  const getIntervenant=()=>{
    dispatch(profileIntervUser(intervenant._id))

  }

  return (
    <div>
      <div className="card text-center" style={{ width: "500px" }}>
        <div className="card-header">Intervenants</div>
        <div className="card-body">
          <p className="card-title">{intervenant.Nom}</p>
          <p className="card-text">{intervenant.Prenom}</p>
          <img className="card-img-top" src={ intervenant.SelectedFile} alt="intervenant image"/>          
          <p className="card-text">{intervenant.NSS}</p>

         
        </div>
        <div>
          <button type="button" className="btn btn-danger" onClick={handleClick}>
            Supprimer Intervenant
          </button>
        </div>
        <button type="button" className="btn btn-success" onClick={handleEdit}>
          Modifier Intervenant
        </button>

       <Link to={`/intervenant-details/${intervenant._id}`}>
        <button className="btn btn-primary" onClick={getIntervenant}>Détails sur cet intervenant</button>
        </Link>

        {show ? (
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label for="Nom">nom de l'intervenant</label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="Nom"
                value={updatedIntervenant.Nom}
              />
            </div>
            <div className="form-group">
              <label for="Prenom">Prénom</label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="Prenom"
                value={updatedIntervenant.Prenom}
              />
            </div>
            <div className="form-group">
            <label for="SelectedFile">image/photo</label>
            <input
            onChange={handleChange}
            type="text"
            className="form-control"
            id="SelectedFile"
        value={updatedIntervenant.SelectedFile}
        />
        </div>
            <div className="form-group">
              <label for="NSS">N°SS</label>
              <input
                onChange={handleChange}
                type='number'
                className="form-control"
                id="NSS"
                value={updatedIntervenant.NSS}
              />
            </div>
            <div className="form-group">
              <label for="NSuiviCarte">N° Suivi de Carte</label>
              <input
                onChange={handleChange}
                type='number'
                className="form-control"
                id="NSuiviCarte"
                value={updatedIntervenant.NSuiviCarte}
              />
            </div>
            <div className="form-group">
              <label for="CarteVitale">N° Carte Vitale</label>
              <input
                onChange={handleChange}
                type='number'
                className="form-control"
                id="CarteVitale"
                value={updatedIntervenant.CarteVitale}
              />
            </div>
            <div className="form-group">
              <label for="DateDeNaissance">Date de naissance</label>
              <input
                onChange={handleChange}
                type='date'
                className="form-control"
                id="DateDeNaissance"
                value={updatedIntervenant.DateDeNaissance}
              />
            </div>
            <div className="form-group">
              <label for="CarteIdentite">N° Carte d'Identité</label>
              <input
                onChange={handleChange}
                type='number'
                className="form-control"
                id="CarteIdentite"
                value={updatedIntervenant.CarteIdentite}
              />
            </div>
            <div className="form-group">
              <label for="DateDerniereVisiteMedicale">Dernière date de visitie médicale</label>
              <input
                onChange={handleChange}
                type='date'
                className="form-control"
                id="DateDerniereVisiteMedicale"
                value={updatedIntervenant.DateDerniereVisiteMedicale}
              />
            </div>
            <div className="form-group">
              <label for="VisiteMedicaleARenouvelerAvantLe">Visitie médicale à renouvler avant </label>
              <input
                onChange={handleChange}
                type='date'
                className="form-control"
                id="VisiteMedicaleARenouvelerAvantLe"
                value={updatedIntervenant.VisiteMedicaleARenouvelerAvantLe}
              />
            </div>
            <div className="form-group">
              <label for="DateDerniereFicheDexposition">Date dernière fiche d'éxposition </label>
              <input
                onChange={handleChange}
                type='date'
                className="form-control"
                id="DateDerniereFicheDexposition"
                value={updatedIntervenant.DateDerniereFicheDexposition}
              />
            </div>
            <div className="form-group">
              <label for="DateDerniereFicheDaptitude">Date dernière fiche d'aptitude </label>
              <input
                onChange={handleChange}
                type='date'
                className="form-control"
                id="DateDerniereFicheDaptitude"
                value={updatedIntervenant.DateDerniereFicheDaptitude}
              />
            </div>
            <div className="form-group">
              <label for="Commentaire">Commentaire</label>
              <input
                onChange={handleChange}
                type='text'
                className="form-control"
                id="Commentaire"
                value={updatedIntervenant.Commentaire}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Appliquer
            </button>
          </form>
        ) : null}
      </div>
    </div>
  )
}

export default IntervUserCard
