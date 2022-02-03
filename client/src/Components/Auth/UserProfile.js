import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getOneUser,
} from '../../Redux/Actions/UserActions'
import { useParams } from 'react-router'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import Box from '@mui/material/Box'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'




const UseProfile = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const user = useSelector((state) => state.AuthReducer.user)
  console.log('user ', user)

  
  /* Controlled accordeon */
  const [expandMDT, setExpandMDT] = React.useState(false)
  const [expandRepresentant, setExpandRepresentant] = React.useState(false)
  const [expandSISERI, setExpandSISERI] = React.useState(false)
  const [expandContrat, setExpandContrat] = React.useState(false)
  

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

export default UseProfile