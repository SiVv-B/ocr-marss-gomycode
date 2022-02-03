import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  deleteIntervenant,
  getOneIntervenant,
  updateIntervenant,
} from '../../Redux/Actions/IntervenantActions'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import DeleteIcon from '@mui/icons-material/Delete'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'
import SaveIcon from '@mui/icons-material/Save'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'

import Popup from '../../Components/styling/Popup'
import '../styling/ListCards.css'

const SingleIntervenant = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  console.log('IntervenantID', id)
  const intervenant = useSelector(
    (state) => state.IntervenantReducer.intervenant,
  )
  console.log('intervenant: from single intervenant', intervenant)

  /* Edit intervenant */
  const [show, setShow] = useState(false)
  const [updatedIntervenant, setupDated] = useState({
    Prenom: ' ',
    Nom: ' ',
    SelectedFile: ' ',
    NSS: ' ',
    NSuiviCarte: '',
    CarteIdentite: '',
    CarteVitale: '',
    DateDeNaissance: '',
    DateDerniereVisiteMedicale: '',
    VisiteMedicaleARenouvelerAvantLe: '',
    DateDerniereFicheDexposition: '',
    DateDerniereFicheDaptitude: '',
    Commentaire: ' ',
  })

  /* Edit and delete intervenant */
  const handleChange = (event) => {
    setupDated({ ...updatedIntervenant, [event.target.id]: event.target.value })
  }
  const handleClick = () => {
    dispatch(deleteIntervenant(intervenant._id))
    navigate('/intervenantsListe')
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
      Prenom: ' ',
      Nom: ' ',
      SelectedFile: ' ',
      NSS: ' ',
      NSuiviCarte: '',
      CarteIdentite: '',
      CarteVitale: '',
      DateDeNaissance: '',
      DateDerniereVisiteMedicale: '',
      VisiteMedicaleARenouvelerAvantLe: '',
      DateDerniereFicheDexposition: '',
      DateDerniereFicheDaptitude: '',
      Commentaire: ' ',
    })
    setShow(false)
  }
  /* ------------ */

  /* Get one intervenant */
  useEffect(() => {
    dispatch(getOneIntervenant(id))
  }, [dispatch])

  if (!intervenant) {
    return 'loading'
  }
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'flex-start',
          flexWrap: 'wrap',
          alignSelf: 'flex-start',
          width: '95%',
        }}
      >
        {/* Coordonnées de l'intervenant */}
        <Box
          className="container"
          sx={{
            width: '40%',
            marginTop: '2%',
            marginBottom: '2%',
            marginLeft: '2%',
          }}
        >
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={intervenant.SelectedFile}
            />
            <CardContent>
              <h4>Identité de l'intervenant</h4>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ textAlign: 'center' }}
              ></Typography>
              <Typography variant="body2" color="text.primary">
                <p>Nom: {intervenant.Nom}</p>
                <p>Prénom:{intervenant.Prenom}</p>
                <p> Date de naissance: {intervenant.DateDeNaissance}</p>
                <p>N°SS: {intervenant.NSS}</p>
                <p>N°Carte d'identité: {intervenant.CarteIdentite}</p>
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            marginBottom: '2%',
            marginTop: '2%',
            marginRight: '20%',
            marginLeft: '-20%',
            width:'45%'
          }}
        >
          {/* données médicales */}

          <Box
            className="container"
            sx={{
              width: '60%',
            }}
          >
            <Card sx={{ maxWidth: 350 }}>
              <CardContent>
                <h4>Données médicale</h4>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ textAlign: 'center' }}
                ></Typography>
                <Typography variant="body2" color="text.primary">
                  <p>
                    N° suivi/ carte:
                    <br />
                    {intervenant.NSuiviCarte}
                  </p>
                  <p>
                    {' '}
                    N° Carte vitale:
                    <br />
                    {intervenant.CarteVitale}
                  </p>
                  <p>
                    {' '}
                    Date de la dernière visite médicale:
                    <br />
                    {intervenant.DateDerniereVisiteMedicale}
                  </p>
                  <p>
                    {' '}
                    Visite médicale à renouvler avant le:
                    <br />
                    {intervenant.VisiteMedicaleARenouvelerAvantLe}
                  </p>
                  <p>
                    {' '}
                    Date dernière fiche d'exposition:
                    <br />
                    {intervenant.DateDerniereFicheDexposition}
                  </p>
                  <p>
                    {' '}
                    Date dernière fiche d'aptitude:
                    <br />
                    {intervenant.DateDerniereFicheDaptitude}
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </Box>
          {/* Autres informations */}
          <Box
            className="container"
            sx={{
              width: '40%',
              marginBottom: '2%',
            }}
          >
            <Card
              sx={{
                maxWidth: 350,
                display: 'flex',
                flexWrap: 'wrap',
                marginLeft: '-10%',
              }}
            >
              <CardContent>
                <h4>Autres informations</h4>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ textAlign: 'center', display:'flex',flexWrap:'wrap' }}
                ></Typography>
                <Typography variant="body2" color="text.primary">
                  <p>
                    Commentaire: <br />
                    {intervenant.Commentaire}
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </Box>

          {/* Modifier/Supprimer intervenant */}
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            marginBottom: '2%',
            marginLeft: '66%',
            position: 'fixed',
            marginTop: '15%',
          }}
        >
          <Tooltip title="Modifier les informations">
            <IconButton onClick={handleEdit}>
              <ModeEditOutlineOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Popup trigger={show} setTrigger={setShow}>
            <div className="scrollDiv">
              <form onSubmit={onSubmit}>
                <div className="form-group" style={{ marginTop: '5%' }}>
                  <label for="Nom">nom de l'intervenant</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="Nom"
                    value={updatedIntervenant.Nom}
                  />
                </div>
                <div className="form-group" style={{ marginTop: '5%' }}>
                  <label for="Prenom">Prénom</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="Prenom"
                    value={updatedIntervenant.Prenom}
                  />
                </div>
                <div className="form-group" style={{ marginTop: '5%' }}>
                  <label for="SelectedFile">image/photo</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="SelectedFile"
                    value={updatedIntervenant.SelectedFile}
                  />
                </div>
                <div className="form-group" style={{ marginTop: '5%' }}>
                  <label for="NSS">N°SS</label>
                  <input
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    id="NSS"
                    value={updatedIntervenant.NSS}
                  />
                </div>
                <div className="form-group" style={{ marginTop: '5%' }}>
                  <label for="NSuiviCarte">N° Suivi de Carte</label>
                  <input
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    id="NSuiviCarte"
                    value={updatedIntervenant.NSuiviCarte}
                  />
                </div>
                <div className="form-group" style={{ marginTop: '5%' }}>
                  <label for="CarteVitale">N° Carte Vitale</label>
                  <input
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    id="CarteVitale"
                    value={updatedIntervenant.CarteVitale}
                  />
                </div>
                <div className="form-group" style={{ marginTop: '5%' }}>
                  <label for="DateDeNaissance">Date de naissance</label>
                  <input
                    onChange={handleChange}
                    type="date"
                    className="form-control"
                    id="DateDeNaissance"
                    value={updatedIntervenant.DateDeNaissance}
                  />
                </div>
                <div className="form-group" style={{ marginTop: '5%' }}>
                  <label for="CarteIdentite">N° Carte d'Identité</label>
                  <input
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    id="CarteIdentite"
                    value={updatedIntervenant.CarteIdentite}
                  />
                </div>
                <div className="form-group" style={{ marginTop: '5%' }}>
                  <label for="DateDerniereVisiteMedicale">
                    Dernière date de visitie médicale
                  </label>
                  <input
                    onChange={handleChange}
                    type="date"
                    className="form-control"
                    id="DateDerniereVisiteMedicale"
                    value={updatedIntervenant.DateDerniereVisiteMedicale}
                  />
                </div>
                <div className="form-group" style={{ marginTop: '5%' }}>
                  <label for="VisiteMedicaleARenouvelerAvantLe">
                    Visitie médicale à renouvler avant{' '}
                  </label>
                  <input
                    onChange={handleChange}
                    type="date"
                    className="form-control"
                    id="VisiteMedicaleARenouvelerAvantLe"
                    value={updatedIntervenant.VisiteMedicaleARenouvelerAvantLe}
                  />
                </div>
                <div className="form-group" style={{ marginTop: '5%' }}>
                  <label for="DateDerniereFicheDexposition">
                    Date dernière fiche d'éxposition{' '}
                  </label>
                  <input
                    onChange={handleChange}
                    type="date"
                    className="form-control"
                    id="DateDerniereFicheDexposition"
                    value={updatedIntervenant.DateDerniereFicheDexposition}
                  />
                </div>
                <div className="form-group" style={{ marginTop: '5%' }}>
                  <label for="DateDerniereFicheDaptitude">
                    Date dernière fiche d'aptitude{' '}
                  </label>
                  <input
                    onChange={handleChange}
                    type="date"
                    className="form-control"
                    id="DateDerniereFicheDaptitude"
                    value={updatedIntervenant.DateDerniereFicheDaptitude}
                  />
                </div>
                <div className="form-group" style={{ marginTop: '5%' }}>
                  <label for="Commentaire">Commentaire</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="Commentaire"
                    value={updatedIntervenant.Commentaire}
                  />
                </div>
                <Tooltip title="Enregistrer les modifications">
                  <IconButton type="submit" className="saveEdit">
                    <SaveIcon />
                  </IconButton>
                </Tooltip>
              </form>
            </div>
          </Popup>
          <Tooltip title="Supprimer l'intervenant">
            <IconButton onClick={handleClick}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </div>
    </div>
  )
}

export default SingleIntervenant
