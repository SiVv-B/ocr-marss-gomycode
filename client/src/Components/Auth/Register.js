import React, { useState } from 'react'
import { register } from '../../Redux/Actions/AuthActions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    username: ' ',
    email: ' ',
    password: ' ',
    SelectedFile: ' ',
  })
  const handleChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value })
  }
  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(register(user, navigate))
    setUser({
      username: ' ',
      email: ' ',
      password: ' ',
      SelectedFile: ' ',
    })
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        width: '100%',
      }}
    >
      <form onSubmit={onSubmit}>
        <Box
          className="container"
          sx={{
            width: '200%',
            marginTop: '10%',
            marginBottom: '10%',
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
                <p>Veuillez remplir les champs</p>
              </Typography>
              <Typography variant="body2" color="text.primary">
                <div className="form-group">
                  <label for="username">Nom de l'entreprise</label>
                  <input
                    value={user.username}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="username"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label for="email">Email du siège social</label>
                  <input
                    value={user.email}
                    onChange={handleChange}
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label for="password">Mot de passe du compte client</label>
                  <input
                    value={user.password}
                    onChange={handleChange}
                    type="password"
                    className="form-control"
                    id="password"
                  />
                </div>
                <div className="form-group">
                  <label for="SelectedFile">
                    Logo/image de l'entreprise client
                  </label>
                  <input
                    value={user.SelectedFile}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="SelectedFile"
                    placeholder="logo photo"
                  />
                </div>
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <button
          type="submit"
          className="btn btn-light"
          style={{ maxHeight: '5%', marginLeft: '22%', color: 'black' }}
        >
          Créer un compte client
        </button>
      </form>
    </div>
  )
}

export default Register
