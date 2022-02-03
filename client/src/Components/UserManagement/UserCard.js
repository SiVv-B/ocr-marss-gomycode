import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Menu from '@mui/material/Menu'
import Typography from '@mui/material/Typography'
import DeleteIcon from '@mui/icons-material/Delete'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import SaveIcon from '@mui/icons-material/Save'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'

import Popup from '../../Components/styling/Popup'
import '../styling/ListCards.css'

import {
  deleteUser,
  updateUser,
  getOneUser,
} from '../../Redux/Actions/UserActions'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'


const ITEM_HEIGHT = 48

const UserCard = ({ user }) => {
  console.log('hello from userCard')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const [updatedUser, setupDated] = useState({
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
  const handleChange = (event) => {
    setupDated({ ...updatedUser, [event.target.id]: event.target.value })
  }
  const handleClick = () => {
    dispatch(deleteUser(user._id))
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
  const getUser = () => {
    dispatch(getOneUser(user._id))
    navigate(`/details`)
  }

  /* option button */
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const menuHandleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const menuHandleClose = () => {
    setAnchorEl(null)
  }
  /* --------- */


  

  return (
    <Box
      className="container"
      sx={{
        width: '30%',
        marginTop: '2%',
        marginBottom: '2%',
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
          <Typography gutterBottom variant="h5" component="div">
            {user.username}
          </Typography>
          <Typography variant="body2" color="text.primary">
            <p>Email: {user.email}</p>
            <p>N°SIRET: {user.NumSiret}</p>
          </Typography>
        </CardContent>

        <Box
          sx={{
            width: '10%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginLeft:'80%',
          }}
        >

          {/* //boutton voir plus de details */}
          <Tooltip title="Voir les détails de ce client">
            <Link to={`/details/${user._id}`}>
              <IconButton onClick={getUser}>
                <RemoveRedEyeIcon />
              </IconButton>
            </Link>
          </Tooltip>

          {/* option Menu button  */}
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={menuHandleClick}
          >
            <MoreVertIcon />
          </IconButton>        
          <Menu
            id="long-menu"
            MenuListProps={{
              'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={menuHandleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '10ch',
              },
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
                {/*   <div className="form-group">
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
                    <label for="SISERINumProtocole">
                      N° du protocole SISERI
                    </label>
                    <input
                      onChange={handleChange}
                      type="number"
                      className="form-control"
                      id="SISERINumProtocole"
                      value={updatedUser.SISERINumProtocole}
                    />
                  </div>
                  <div className="form-group">
                    <label for="SISERINomCle">
                      Nom clé du protocole SISERI
                    </label>
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
                    <label for="MDTSiret">
                      N° SIRET du Medecin du Travail:
                    </label>
                    <input
                      onChange={handleChange}
                      type="number"
                      className="form-control"
                      id="MDTSiret"
                      value={updatedUser.MDTSiret}
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
                    <label for="ContratDateDebut">
                      Date du début du contrat
                    </label>
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
              <IconButton onClick={handleClick}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Menu>
        </Box>
      </Card>
    </Box>
  )
}

export default UserCard
