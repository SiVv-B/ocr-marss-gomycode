
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../Redux/Actions/AuthActions'
import { useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [user, setUser] = useState({ email: ' ', password: ' ' })
  const handleChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value })
  }
  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(login(user, navigate))
    setUser({ email: ' ', password: ' ' })
    
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
            marginTop: '15%',
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
                  <label htmlFor="email">Email du siège social</label>
                  <input
                    onChange={handleChange}
                    value={user.email}
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Mot de passe </label>
                  <input
                    onChange={handleChange}
                    value={user.password}
                    type="password"
                    className="form-control"
                    id="password"
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
          Acceder au Compte client
        </button>
       
      </form>
    </div>
  )
}
export default Login
