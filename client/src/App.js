import React from 'react'
import { ThemeProvider } from '@mui/material'
import theme from './Components/styling/theme'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUser } from './Redux/Actions/AuthActions'

//Routing
import PrivateRoute from './Components/Routing/PrivateRoute'
//Screens
import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login'
import UserProfile from './Components/Auth/UserProfile'
import SingleUser from './Components/UserManagement/SingleUser'
import UserList from './Components/UserManagement/UserList'
import AddUser from './Components/UserManagement/UserAdd'
import Home from './Components/Home'
import Navbar from './Components/NavBar'
import IntervenantsListe from './Components/IntervenantManagement/IntervantsListe'
import SingleIntervenant from './Components/IntervenantManagement/SingleIntervenant'
import AddIntervenant from './Components/IntervenantManagement/AddIntervenant'
import { BrowserRouter, Routes, Route } from 'react-router-dom'




function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(getUser())
    }
  }, [])


  return (
    <ThemeProvider theme={theme}>
    
        
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<UserProfile />} />


   {/*        <Route
            path="/profile"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />  */}
          
          {/* user management routes */}
          <Route path="/list" element={<UserList />} />
          <Route path="/add" element={<AddUser />} />
        <Route path="/details/:id" element={<SingleUser />} />



          {/* intervenant management routes */}
          <Route path="/intervenantsListe" element={<IntervenantsListe />} />
          <Route
            path="/intervenant-details/:id"
            element={<SingleIntervenant />}
          />
          <Route path="/intervenant-add" element={<AddIntervenant />} />
        </Routes>
      </BrowserRouter>

    </ThemeProvider>
  )
}

export default App
