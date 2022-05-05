import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import {
  deleteIntervenant,
  getOneIntervenant,
  updateIntervenant,
} from '../../Redux/Actions/IntervenantActions'

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
import '../styling/Popup'
const ITEM_HEIGHT = 48

const IntervenantCard = ({ intervenant }) => {
  console.log('hello from IntervenantCard')
  const navigate = useNavigate()
  const dispatch = useDispatch()
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
  const getIntervenant = () => {
    dispatch(getOneIntervenant(intervenant._id))
    navigate(`/intervenant-details`)
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
          image={intervenant.SelectedFile}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Intervenant
          </Typography>
          <Typography variant="body2" color="text.primary">
            <p>Nom: {intervenant.Nom}</p>
            <p>Prénom: {intervenant.Prenom}</p>
            <p>NSS: {intervenant.NSS}</p>
          </Typography>
        </CardContent>

        <Box
          sx={{
            width: '10%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginLeft: '80%',
          }}
        >
          {/* //boutton voir plus de details */}
          <Tooltip title="Voir les détails de l'intrevenant">
            <Link to={`/intervenant-details/${intervenant._id}`}>
              <IconButton onClick={getIntervenant}>
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
                      value={
                        updatedIntervenant.VisiteMedicaleARenouvelerAvantLe
                      }
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
          </Menu>
        </Box>
      </Card>
    </Box>
  )
}

export default IntervenantCard
