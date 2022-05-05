import React from 'react'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const logoMARSS = require('./pictures/logoMARSS.png')

function Home() {
  return (
    <div>
      <div>
        <img
          src={logoMARSS}
          alt="marsslogo"
          style={{
            marginTop: '2%',
            marginLeft: '50%',
            height: '30%',
            width: '45%',
          }}
        />
      </div>
      <Box
        className="container"
        sx={{
          width: '45%',
          marginTop: '2%',
          marginBottom: '2%',
          marginLeft: '2%',
          position: 'fixed',
          top: '15%',
        }}
      >
        <Card>
          <CardContent>
            <h4>A propos </h4>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ textAlign: 'center' }}
            ></Typography>
            <Typography variant="body2" color="text.primary">
              <br />
              <p>
                La société M.A.R.S.S a été créée en 2011 en qualité en bureau
                d’étude.{' '}
              </p>
              <p>
                OCR (Organisme Compétent en Radioprotection) a été certifié et
                fondé en juin 2021.
              </p>
              <p>
                M.A.R.S.S est donc aujourd’hui un bureau d’étude et un OCR.{' '}
              </p>
              <br />
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box
        className="container"
        sx={{
          width: '45%',
          marginTop: '2%',
          marginBottom: '2%',
          marginLeft: '2%',
          position: 'fixed',
          top: '50%',
        }}
      >
        <Card>
          <CardContent>
            <h4>Contact </h4>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ textAlign: 'center' }}
            ></Typography>
            <Typography variant="body2" color="text.primary">
              <br />
              <p> Email : contactemail@gmail.com </p>
              <p> Téléphone : 06 44 55 22 </p>
              <p> Adresse : adresse de la compagnie MARSS </p>
              <p> 38000-Grenoble.France </p>
              <br />
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  )
}

export default Home
