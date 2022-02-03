import React, { useState } from 'react'
import { addUser } from '../../Redux/Actions/UserActions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const UserAdd = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
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
  const handleChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value })
  }
  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(addUser(user))
    setUser({
      username: '',
      email: '',
      password: '',
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
    navigate('/list')
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'flex-start',
        width: '95%',
        marginLeft: '2%',
      }}
    >
      <form
        onSubmit={onSubmit}
        style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
      >
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
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ textAlign: 'center' }}
              >
                <p>Informations sur l'entreprise</p>
              </Typography>
              <Typography variant="body2" color="text.primary">
                <div className="form-group">
                  <label for="username">Nom de l'entreprise</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="username"
                    value={user.username}
                  />
                </div>
                <div className="form-group">
                  <label for="email">Email du siège social</label>
                  <input
                    onChange={handleChange}
                    type="email"
                    className="form-control"
                    id="email"
                    value={user.email}
                  />
                  <div className="form-group">
                    <label for="password">Mot de passe du compte client</label>
                    <input
                      onChange={handleChange}
                      type="password"
                      className="form-control"
                      id="password"
                      value={user.password}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label for="SelectedFile">Image/logo</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="SelectedFile"
                    value={user.SelectedFile}
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
                    value={user.SiegeSocialAdresse}
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
                  <label for="NumSiret">N°SIRET</label>
                  <input
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    id="NumSiret"
                    value={user.NumSiret}
                  />
                </div>
              </Typography>
            </CardContent>
          </Card>
        </Box>

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
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ textAlign: 'center' }}
              >
                <p>Informations sur le représentant</p>
              </Typography>
              <Typography variant="body2" color="text.primary">
                <div className="form-group">
                  <label for="RepresentantNom">Nom du représentant</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="RepresentantNom"
                    value={user.RepresentantNom}
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
                    value={user.RepresentFonction}
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
                    value={user.RepresentantTelephone}
                  />
                </div>
                <div className="form-group">
                  <label for="RepresentantEmail">Email du représentant</label>
                  <input
                    onChange={handleChange}
                    type="email"
                    className="form-control"
                    id="RepresentantEmail"
                    value={user.RepresentantEmail}
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
                    value={user.RepresentantNumHabilitation}
                  />
                </div>
              </Typography>
            </CardContent>
          </Card>
        </Box>
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
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ textAlign: 'center' }}
              >
                <p>Informations sur le protocole SISERI</p>
              </Typography>
              <Typography variant="body2" color="text.primary">
                <div className="form-group">
                  <label for="SISERINumProtocole">N° du protocole SISERI</label>
                  <input
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    id="SISERINumProtocole"
                    value={user.SISERINumProtocole}
                  />
                </div>
                <div className="form-group">
                  <label for="SISERINomCle">Nom clé du protocole SISERI</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="SISERINomCle"
                    value={user.SISERINomCle}
                  />
                </div>
                <div className="form-group">
                  <label for="SISERIUpdate">SISERI mis à jour le:</label>
                  <input
                    onChange={handleChange}
                    type="date"
                    className="form-control"
                    id="SISERIUpdate"
                    value={user.SISERIUpdate}
                  />
                </div>
              </Typography>
            </CardContent>
          </Card>
        </Box>

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
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ textAlign: 'center' }}
              >
                <p>Informations sur le medecin de travail</p>
              </Typography>
              <Typography variant="body2" color="text.primary">
                <div className="form-group">
                  <label for="MDTNom">Nom du Medecin du Travail:</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="MDTNom"
                    value={user.MDTNom}
                  />
                </div>
                <div className="form-group">
                  <label for="MDTPrenom">Prénom du Medecin du Travail:</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="MDTPrenom"
                    value={user.MDTPrenom}
                  />
                </div>
                <div className="form-group">
                  <label for="MDTEmail">Email du Medecin du Travail:</label>
                  <input
                    onChange={handleChange}
                    type="email"
                    className="form-control"
                    id="MDTEmail"
                    value={user.MDTEmail}
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
                    value={user.MDTTelephone}
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
                    value={user.MDTNumHabilitation}
                  />
                </div>
                <div className="form-group">
                  <label for="MDTSiret">N° SIRET du Medecin du Travail:</label>
                  <input
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    id="MDTSiret"
                    value={user.MDTSiret}
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
                    value={user.MDTTelephone}
                  />
                </div>
              </Typography>
            </CardContent>
          </Card>
        </Box>

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
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ textAlign: 'center' }}
              >
                <p>Informations sur le contrat</p>
              </Typography>
              <Typography variant="body2" color="text.primary">
                <div className="form-group">
                  <label for="ContratNum">N° du contrat</label>
                  <input
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    id="ContratNum"
                    value={user.ContratNum}
                  />
                </div>
                <div className="form-group">
                  <label for="ContratDateDebut">Date du début du contrat</label>
                  <input
                    onChange={handleChange}
                    type="date"
                    className="form-control"
                    id="ContratDateDebut"
                    value={user.ContratDateDebut}
                  />
                </div>
                <div className="form-group">
                  <label for="ContratDateFin">Date de fin du contrat</label>
                  <input
                    onChange={handleChange}
                    type="date"
                    className="form-control"
                    id="ContratDateFin"
                    value={user.ContratDateFin}
                  />
                </div>
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <button
          type="submit"
          className="btn btn-light"
          style={{ maxHeight: '5%', marginLeft: '20%'}}
        >
          Ajouter le client
        </button>
      </form>
    </div>
  )
}

export default UserAdd
