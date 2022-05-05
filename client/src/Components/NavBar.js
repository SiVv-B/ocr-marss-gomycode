import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../Redux/Actions/AuthActions'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Badge from '@mui/material/Badge'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'

import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'

const menuOptions = [
  <Link to="/register" style={{ textDecoration: 'none', color: '#212121' }}>
    Créer un compte{' '}
  </Link>,
  <Link to="/login" style={{ textDecoration: 'none', color: '#212121' }}>
    {' '}
    Se connecter{' '}
  </Link>,
  <Link to="/list" style={{ textDecoration: 'none', color: '#212121' }}>
    Liste des clients{' '}
  </Link>,
  <Link to="/add" style={{ textDecoration: 'none', color: '#212121' }}>
    Ajouter un client{' '}
  </Link>,
  <Link
    to="/intervenantsListe"
    style={{ textDecoration: 'none', color: '#212121' }}
  >
    Liste des intervenants
  </Link>,
  <Link
    to="/intervenant-add"
    style={{ textDecoration: 'none', color: '#212121' }}
  >
    {' '}
    Ajouter un intervenant{' '}
  </Link>,
  /*   <Link
    to="/toutintervenantsdesclients"
    style={{ textDecoration: 'none', color: '#212121' }}
  >
    liste intervenant relié user{' '}
  </Link>, */
]

const ITEM_HEIGHT = 60

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.AuthReducer.isAuth)
  const isAuthHandleClick = () => {
    dispatch(logOut())
    navigate('/login')
  }

  const [anchorElMenu, setAnchorElMenu] = React.useState(null)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  /* dropdown menu functionalities */
  const open = Boolean(anchorElMenu)
  const MenuHandleClick = (event) => {
    setAnchorElMenu(event.currentTarget)
  }
  const handleCloseMenu = () => {
    setAnchorElMenu(null)
  }
  /* -------- */

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    ></Menu>
  )

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile teeeeest</p>
      </MenuItem>
    </Menu>
  )

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {isAuth ? <div>{/* afficher le menu */}</div> : null}
            {/* menu options  dropdown menu*/}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              id="long-button"
              aria-controls={open ? 'long-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={MenuHandleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                'aria-labelledby': 'long-button',
              }}
              anchorEl={anchorElMenu}
              open={open}
              onClose={handleCloseMenu}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: '25ch',
                },
              }}
            >
              {menuOptions.map((option) => (
                <MenuItem
                  key={option}
                  selected={option === 'Pyxis'}
                  onClick={handleClose}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
            {/* Fin dropdown Menu */}

            <Link to="/" style={{ textDecoration: 'none', color: '#FFF' }}>
              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                OCR-MARSS
              </Typography>
            </Link>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                marginLeft: '5%',
                width: '50%',
              }}
            >
              <Link
                to="/list"
                style={{ textDecoration: 'none', color: '#FFF' }}
              >
                Liste des clients{' '}
              </Link>

              <Link
                to="/intervenantsListe"
                style={{ textDecoration: 'none', color: '#FFF' }}
              >
                Liste des intervenants
              </Link>
            </div>
            {isAuth ? (
              <div
                style={{
                  display: 'flex',
                  marginRight: '2%',
                  marginLeft: '2%',
                }}
              >
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={isAuth}
                        onChange={isAuthHandleClick}
                        aria-label="login switch"
                        color="default"
                      />
                    }
                    label={isAuth ? 'Se déconnecter' : 'Se connecter'}
                  />
                </FormGroup>
              </div>
            ) : (
              <Link
                to="/login"
                style={{ textDecoration: 'none', color: '#FFF' }}
              >
                <Typography
                  component="div"
                  sx={{
                    display: 'flex',
                    width: '150%',
                    marginLeft: '200%',
                  }}
                >
                  Se connecter
                </Typography>
              </Link>
            )}
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </div>
  )
}

export default Navbar
