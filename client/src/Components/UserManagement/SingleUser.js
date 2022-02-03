
import React, { useEffect, useState } from 'react'
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
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Popup from '../../Components/styling/Popup'
import '../styling/ListCards.css'
import { useSelector, useDispatch } from 'react-redux'
import {
  getOneUser,
  deleteUser,
  updateUser,
} from '../../Redux/Actions/UserActions'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'

const SingleUser = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  console.log('userID', id)
  const user = useSelector((state) => state.UserReducer.user)
  console.log('user: from single user', user)
  /* Controlled accordeon */
  const [expandMDT, setExpandMDT] = React.useState(false)
  const [expandRepresentant, setExpandRepresentant] = React.useState(false)
  const [expandSISERI, setExpandSISERI] = React.useState(false)
  const [expandContrat, setExpandContrat] = React.useState(false)
  /* Edit user */
  const [show, setShow] = useState(false)
  const [updatedUser, setupDated] = useState({
    username: '',
    email: '',
   /*  password: '', */
    SelectedFile: '',
    NumSiret: '',
    role: '',
    SiegeSocialAdresse: '',
    SiegeSocialTelephone: '',
    SiegeSocialEmail: '',
    RepresentantNom: '',
    RepresentFonction: '',
    RepresentantTelephone: '',
    RepresentantEmail: '',
    RepresentantNumHabilitation: '',
    SISERINumProtocole: '',
    SISERINomCle: '',
    SISERIUpdate: '',
    MDTNom: '',
    MDTPrenom: '',
    MDTNumHabilitation: '',
    MDTSiret: '',
    MDTTelephone: '',
    MDTEmail: '',
    ContratNum: '',
    ContratDateDebut: '',
    ContratDateFin: '',
  })
  /* Controlled accordeon */
  const toggleAcordionMDT = () => {
    setExpandMDT((prev) => !prev)
  }
  const toggleAcordionRepresentant = () => {
    setExpandRepresentant((prev) => !prev)
  }
  const toggleAcordionSISERI = () => {
    setExpandSISERI((prev) => !prev)
  }
  const toggleAcordionContrat = () => {
    setExpandContrat((prev) => !prev)
  }
  /* --------- */
  /* Edit and delete user */
  const handleChange = (event) => {
    setupDated({ ...updatedUser, [event.target.id]: event.target.value })
  }
  const handleDelete = () => {
    dispatch(deleteUser(user._id))
    navigate(`/list`)
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
    dispatch(updateUser(user._id, updatedUser))
    setupDated({
      username: '',
      email: '',
      /* password: '', */
      SelectedFile: '',
      NumSiret: '',
      role: '',
      SiegeSocialAdresse: '',
      SiegeSocialTelephone: '',
      SiegeSocialEmail: '',
      RepresentantNom: '',
      RepresentFonction: '',
      RepresentantTelephone: '',
      RepresentantEmail: '',
      RepresentantNumHabilitation: '',
      SISERINumProtocole: '',
      SISERINomCle: '',
      SISERIUpdate: '',
      MDTNom: '',
      MDTPrenom: '',
      MDTNumHabilitation: '',
      MDTSiret: '',
      MDTTelephone: '',
      MDTEmail: '',
      ContratNum: '',
      ContratDateDebut: '',
      ContratDateFin: '',
    })
    setShow(false)
  }
  /* ------------ */
  
  /* Get one user */
  useEffect(() => {
    dispatch(getOneUser(id))
  }, [dispatch])
  if (!user) {
    return 'loading'
  }
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignContent: 'flex-start',
          flexWrap: 'wrap',
          alignSelf: 'flex-start',
          width: '95%',
          marginLeft: '2%',
        }}
      >
        {/* Coordonnées du client */}
        <Box
          className="container"
          sx={{
            width: '40%',
            marginTop: '2%',
            marginBottom: '2%',
            marginLeft: '2%',
            marginRight: '-10%',
          }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={user.SelectedFile}
            />
            <CardContent>
              <p>Nom de l'entreprise:</p>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ textAlign: 'center' }}
              >
                {user.username}
              </Typography>
              <Typography variant="body2" color="text.primary">
                <p>Email: {user && user.email}</p>
                <p>Télephone:{user && user.SiegeSocialTelephone}</p>
                <p> Adresse: {user && user.SiegeSocialAdresse}</p>
                <p>N°SIRET: {user && user.NumSiret}</p>
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box
          className="container"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            width: '50%',
            marginTop: '2%',
            marginBottom: '2%',
            marginLeft: '2%',
          }}
        >
          {/* MDT du client */}
          <Box
            sx={{
              marginTop: '2%',
              marginBottom: '2%',
              width: '50%',
            }}
          >
            <Accordion expanded={expandMDT}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                onClick={toggleAcordionMDT}
              >
                <Typography>Medecin de travail</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {/* les informations dévoilées */}
                <Typography variant="body2" color="text.primary">
                  <p>Nom:{user && user.MDTNom}</p>
                  <p> Prénom:{user && user.MDTPrenom}</p>
                  <p> Téléphone: {user && user.MDTTelephone}</p>
                  <p> Email : {user && user.MDTEmail}</p>
                  <p> N° d'habilitation : {user && user.MDTNumHabilitation}</p>
                  <p> Email : {user && user.MDTEmail}</p>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          {/* Représentant du client */}
          <Box
            sx={{
              marginTop: '2%',
              marginBottom: '2%',
            }}
          >
            <Accordion expanded={expandRepresentant}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                onClick={toggleAcordionRepresentant}
              >
                <Typography>Représentant</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.primary">
                  <p>Nom: {user && user.RepresentantNom}</p>
                  <p>Fonction:{user && user.RepresentFonction}</p>
                  <p> Email: {user && user.RepresentantEmail}</p>
                  <p> Téléphone: {user && user.RepresentantTelephone}</p>
                  <p>
                    {' '}
                    N°d'habilitation :{user && user.RepresentantNumHabilitation}
                  </p>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          {/* SISSERI du client */}
          <Box
            sx={{
              marginTop: '2%',
              marginBottom: '2%',
            }}
          >
            <Accordion expanded={expandSISERI}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                onClick={toggleAcordionSISERI}
              >
                <Typography>SISERI</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.primary">
                  <p>N° du protocole:{user && user.SISERINumProtocole}</p>
                  <p> Nom clé:{user && user.SISERINomCle}</p>
                  <p> Date de mise à jour: {user && user.SISERIUpdate}</p>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          {/* Contrat du client */}
          <Box
            sx={{
              marginTop: '2%',
              marginBottom: '2%',
            }}
          >
            <Accordion expanded={expandContrat}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                onClick={toggleAcordionContrat}
              >
                <Typography>Contrat</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.primary">
                  <p>N° du contrat:{user && user.ContratNum}</p>
                  <p> Date du début:{user && user.ContratDateDebut}</p>
                  <p> Date de fin: {user && user.ContratDateFin}</p>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
        {/* Modifier/Supprimer client */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            marginTop: '2%',
            marginBottom: '2%',
            marginRight: '5%',
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
                <div className="form-group">
                  <label for="username">Nom de l'entreprise</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="username"
                    value={updatedUser.username}
                  />
                </div>
                <div className="form-group">
                  <label for="email">email</label>
                  <input
                    onChange={handleChange}
                    type="email"
                    className="form-control"
                    id="email"
                    value={updatedUser.email}
                  />
                </div>
{/*                 <div className="form-group">
                  <label for="password">Mot de pass</label>
                  <input
                    onChange={handleChange}
                    type='password'
                    className="form-control"
                    id="password"
                    value={updatedUser.password}
                  />
                </div> */}
                
                <div className="form-group">
                  <label for="SelectedFile">Image/logo</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="SelectedFile"
                    value={updatedUser.SelectedFile}
                  />
                </div>
                <div className="form-group">
                  <label for="NumSiret">N°SIRET</label>
                  <input
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    id="NumSiret"
                    value={updatedUser.NumSiret}
                  />
                </div>
                <div className="form-group">
                  <label for="RepresentantNom">Nom du représentant</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="RepresentantNom"
                    value={updatedUser.RepresentantNom}
                  />
                </div>
                <div className="form-group">
                  <label for="RepresentFonction">
                    Fonction du représentant
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="RepresentFonction"
                    value={updatedUser.RepresentFonction}
                  />
                </div>
                <div className="form-group">
                  <label for="RepresentantTelephone">
                    Télephone du représentant
                  </label>
                  <input
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    id="RepresentantTelephone"
                    value={updatedUser.RepresentantTelephone}
                  />
                </div>
                <div className="form-group">
                  <label for="RepresentantEmail">Email du représentant</label>
                  <input
                    onChange={handleChange}
                    type="email"
                    className="form-control"
                    id="RepresentantEmail"
                    value={updatedUser.RepresentantEmail}
                  />
                </div>
                <div className="form-group">
                  <label for="RepresentantNumHabilitation">
                    N° d'habilitation du représentant
                  </label>
                  <input
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    id="RepresentantNumHabilitation"
                    value={updatedUser.RepresentantNumHabilitation}
                  />
                </div>
                <div className="form-group">
                  <label for="SiegeSocialAdresse">
                    Adresse du siège social
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="SiegeSocialAdresse"
                    placeholder="Adresse du Siège social"
                    value={updatedUser.SiegeSocialAdresse}
                  />
                </div>
                <div className="form-group">
                  <label for="SiegeSocialTelephone">
                    Téléphone du siège social
                  </label>
                  <input
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    id="SiegeSocialTelephone"
                    value={user.SiegeSocialTelephone}
                  />
                </div>
                <div className="form-group">
                  <label for="SiegeSocialEmail">Email du siège social</label>
                  <input
                    onChange={handleChange}
                    type="email"
                    className="form-control"
                    id="SiegeSocialEmail"
                    value={updatedUser.SiegeSocialEmail}
                  />
                </div>
                <div className="form-group">
                  <label for="SISERINumProtocole">N° du protocole SISERI</label>
                  <input
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    id="SISERINumProtocole"
                    value={updatedUser.SISERINumProtocole}
                  />
                </div>
                <div className="form-group">
                  <label for="SISERINomCle">Nom clé du protocole SISERI</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="SISERINomCle"
                    value={updatedUser.SISERINomCle}
                  />
                </div>
                <div className="form-group">
                  <label for="SISERIUpdate">SISERI mis à jour le:</label>
                  <input
                    onChange={handleChange}
                    type="date"
                    className="form-control"
                    id="SISERIUpdate"
                    value={updatedUser.SISERIUpdate}
                  />
                </div>
                <div className="form-group">
                  <label for="MDTNom">Nom du Medecin du Travail:</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="MDTNom"
                    value={updatedUser.MDTNom}
                  />
                </div>
                <div className="form-group">
                  <label for="MDTPrenom">Prénom du Medecin du Travail:</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="MDTPrenom"
                    value={updatedUser.MDTPrenom}
                  />
                </div>
                <div className="form-group">
                  <label for="MDTEmail">Email du Medecin du Travail:</label>
                  <input
                    onChange={handleChange}
                    type="email"
                    className="form-control"
                    id="MDTEmail"
                    value={updatedUser.MDTEmail}
                  />
                </div>
                <div className="form-group">
                  <label for="MDTTelephone">
                    N° Téléphone du Medecin du Travail:
                  </label>
                  <input
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    id="MDTTelephone"
                    value={updatedUser.MDTTelephone}
                  />
                </div>
                <div className="form-group">
                  <label for="MDTNumHabilitation">
                    N° habilitation du Medecin du Travail:
                  </label>
                  <input
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    id="MDTNumHabilitation"
                    value={updatedUser.MDTNumHabilitation}
                  />
                </div>
                <div className="form-group">
                  <label for="MDTSiret">N° SIRET du Medecin du Travail:</label>
                  <input
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    id="MDTSiret"
                    value={updatedUser.MDTSiret}
                  />
                </div>
                <div className="form-group">
                  <label for="MDTTelephone">
                    N° Téléphone du Medecin du Travail:
                  </label>
                  <input
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    id="MDTTelephone"
                    value={updatedUser.MDTTelephone}
                  />
                </div>
                <div className="form-group">
                  <label for="ContratNum">N° du contrat</label>
                  <input
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    id="ContratNum"
                    value={updatedUser.ContratNum}
                  />
                </div>
                <div className="form-group">
                  <label for="ContratDateDebut">Date du début du contrat</label>
                  <input
                    onChange={handleChange}
                    type="date"
                    className="form-control"
                    id="ContratDateDebut"
                    value={updatedUser.ContratDateDebut}
                  />
                </div>
                <div className="form-group">
                  <label for="ContratDateFin">Date de fin du contrat</label>
                  <input
                    onChange={handleChange}
                    type="date"
                    className="form-control"
                    id="ContratDateFin"
                    value={updatedUser.ContratDateFin}
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
          <Tooltip title="Supprimer le client">
            <IconButton onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          {/* Add user */}
          {/*  <Fab size="small" color="inherit" aria-label="add">
            <Tooltip title="Ajouter un Intervenant">
              <IconButton>
                <AddIcon />
              </IconButton>
            </Tooltip>
          </Fab> */}
        </Box>
        {/* 
        <div>
      <Link to={`/intervenant-details/${intervenant._id}`}>
        <button className="btn btn-primary">voir plus de details sur l'intervenant</button>
        </Link>
        {show ? (
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label for="Nom">nom de l'intervenant</label>
              //,,........ faire un déroulant pour montrer plus de details sur l'intervenant
              plus boutton modifier et boutton supprimer
      </div>
      */}
        {/*         <Link to={'/intervenantsListe'}>
          <button className="btn btn-primary">
            voir plus de details sur l'intervenant
          </button>
        </Link>
        <button>ajouter un intervenant</button>
      </div> */}
      </div>
    </div>
  )
}
export default SingleUser
