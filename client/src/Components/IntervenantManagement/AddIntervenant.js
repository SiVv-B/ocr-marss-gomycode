import React, { useState } from 'react'
import { addIntervenant } from '../../Redux/Actions/IntervenantActions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'


const AddIntervenant = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [intervenant, setIntervenant] = useState({
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
    setIntervenant({ ...intervenant, [event.target.id]: event.target.value })
  }
  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(addIntervenant(intervenant, navigate))
    setIntervenant({
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
    navigate('/intervenantsListe')
  }
  return (
    <div>
      <form
        onSubmit={onSubmit}
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignContent:'center', 
          alignSelf: 'flex-start',
          width: '80%',
          marginLeft: '5%',
         
        }}
      >
        <Box
          className="container"
          sx={{
            width: '40%',
            marginTop: '2%',
            marginBottom: '2%',
            marginRight: '-10%',
            display: 'flex',
            flexWrap:"wrap"
            
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
                <p>Identité personnelle de l'intervenant</p>
              </Typography>
              <Typography variant="body2" color="text.primary">
                <div
                  className="form-group"
                  style={{ marginTop: '5%', marginBottom: '5%' }}
                >
                  <label for="Nom">nom de l'intervenant</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="Nom"
                    value={intervenant.Nom}
                  />
                </div>
                <div
                  className="form-group"
                  style={{ marginTop: '5%', marginBottom: '5%' }}
                >
                  <label for="Prenom">Prénom</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="Prenom"
                    value={intervenant.Prenom}
                  />
                </div>
                <div
                  className="form-group"
                  style={{ marginTop: '5%', marginBottom: '5%' }}
                >
                  <label for="SelectedFile">image/photo</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="SelectedFile"
                    value={intervenant.SelectedFile}
                  />
                </div>
                <div
                  className="form-group"
                  style={{ marginTop: '5%', marginBottom: '5%' }}
                >
                  <label for="DateDeNaissance">Date de naissance</label>
                  <input
                    onChange={handleChange}
                    type="date"
                    className="form-control"
                    id="DateDeNaissance"
                    value={intervenant.DateDeNaissance}
                  />
                </div>
                <div
                  className="form-group"
                  style={{ marginTop: '5%', marginBottom: '5%' }}
                >
                  <label for="CarteIdentite">N° Carte d'Identité</label>
                  <input
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    id="CarteIdentite"
                    value={intervenant.CarteIdentite}
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
                <p>Données médicale</p>
              </Typography>
              <Typography variant="body2" color="text.primary">
                <div
                  className="form-group"
                  style={{ marginTop: '5%', marginBottom: '5%' }}
                >
                  <label for="NSS">N°SS</label>
                  <input
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    id="NSS"
                    value={intervenant.NSS}
                  />
                </div>
                <div
                  className="form-group"
                  style={{ marginTop: '5%', marginBottom: '5%' }}
                >
                  <label for="NSuiviCarte">N° Suivi de Carte</label>
                  <input
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    id="NSuiviCarte"
                    value={intervenant.NSuiviCarte}
                  />
                </div>
                <div
                  className="form-group"
                  style={{ marginTop: '5%', marginBottom: '5%' }}
                >
                  <label for="CarteVitale">N° Carte Vitale</label>
                  <input
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    id="CarteVitale"
                    value={intervenant.CarteVitale}
                  />
                </div>
                <div
                  className="form-group"
                  style={{ marginTop: '5%', marginBottom: '5%' }}
                >
                  <label for="DateDerniereVisiteMedicale">
                    Dernière date de visitie médicale
                  </label>
                  <input
                    onChange={handleChange}
                    type="date"
                    className="form-control"
                    id="DateDerniereVisiteMedicale"
                    value={intervenant.DateDerniereVisiteMedicale}
                  />
                </div>
                <div
                  className="form-group"
                  style={{ marginTop: '5%', marginBottom: '5%' }}
                >
                  <label for="VisiteMedicaleARenouvelerAvantLe">
                    Visitie médicale à renouvler avant{' '}
                  </label>
                  <input
                    onChange={handleChange}
                    type="date"
                    className="form-control"
                    id="VisiteMedicaleARenouvelerAvantLe"
                    value={intervenant.VisiteMedicaleARenouvelerAvantLe}
                  />
                </div>
                <div
                  className="form-group"
                  style={{ marginTop: '5%', marginBottom: '5%' }}
                >
                  <label for="DateDerniereFicheDexposition">
                    Date dernière fiche d'éxposition{' '}
                  </label>
                  <input
                    onChange={handleChange}
                    type="date"
                    className="form-control"
                    id="DateDerniereFicheDexposition"
                    value={intervenant.DateDerniereFicheDexposition}
                  />
                </div>
                <div
                  className="form-group"
                  style={{ marginTop: '5%', marginBottom: '5%' }}
                >
                  <label for="DateDerniereFicheDaptitude">
                    Date dernière fiche d'aptitude{' '}
                  </label>
                  <input
                    onChange={handleChange}
                    type="date"
                    className="form-control"
                    id="DateDerniereFicheDaptitude"
                    value={intervenant.DateDerniereFicheDaptitude}
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
                <p>Commentaires</p>
              </Typography>
              <Typography variant="body2" color="text.primary">
                <div
                  className="form-group"
                  style={{ marginTop: '5%', marginBottom: '5%' }}
                >
                  <label for="Commentaire">Commentaire</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="Commentaire"
                    value={intervenant.Commentaire}
                  />
                </div>
              </Typography>
            </CardContent>
          </Card>
          <button
          type="submit"
          className="btn btn-light"
          style={{ maxHeight: '5%', marginLeft: '20%',marginTop:'10%' }}
        >
          Ajouter l'intervenant
        </button>
        </Box>
        
      </form>
    </div>
  )
}

export default AddIntervenant
