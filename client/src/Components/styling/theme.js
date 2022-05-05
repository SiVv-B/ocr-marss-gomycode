import { createTheme } from '@mui/material'
import { red } from '@mui/material/colors'

const primaryColor = red[900]
const secondaryColor = red[300]
const errorColor = red[50]

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    error: {
      main: errorColor,
    },
    text: {
      primary: '#212121',
      secondary: '#616161',
    },
  },
})
export default theme
