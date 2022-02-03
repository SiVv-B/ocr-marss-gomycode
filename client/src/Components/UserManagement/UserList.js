import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import IconButton from '@mui/material/IconButton'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import Tooltip from '@mui/material/Tooltip'

import SearchIcon from '@mui/icons-material/Search'

import { GetUsers } from '../../Redux/Actions/UserActions'
import UserCard from './UserCard'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const UserList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetUsers())
  }, [dispatch])

  const users = useSelector((state) => state.UserReducer.users)
  console.log('Users list:', users)

  /* navBar settings */
  
  //filter the input
  const [searchTerm, setSerachTerm] = useState('')
  const onChange = (event) => {
    setSerachTerm(event.target.value)
  }

  //Get the searched item

  const onSubmit = (event) => {
    event.preventDefault()
    setSerachTerm('')
  }

  /* ------ */

  return (
    <div>
      <div       
      style={{
        marginTop:'2%',
        marginLeft:'2%',
        display:'flex',
      }}>
        <div>
      <Link to="/add">
          <Fab size="small" color="inherit" aria-label="add">
            <Tooltip title="Ajouter Un client">
              <IconButton>
                <AddIcon />
              </IconButton>
            </Tooltip>
          </Fab>
        </Link>
        </div>

      {/* searchBar */}
      <form onSubmit={onSubmit}
            style={{
              display:'flex',
              marginLeft:'2%',
              maxHeight:'5%',
              width:'100%',
              border:'solid',
              borderColor:'white',             
            }}>
        <input
          onChange={onChange}
          value={searchTerm}
          type="text"
          placeholder=" ⌕..Chercher client"
          style={{borderStyle:'none',width:'15%',}}
        />
<br/>
        {users
          .filter((user) => {
            if (searchTerm == '') {
              return null
            } else if (
              user.username.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return <div>{user}</div>
            }
          })
          .map((user) => (
            <UserCard key={user._id} user={user} />
          ))}
      </form>

      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          alignSelf: 'flex-start',
          width: '95%',
          marginLeft: '2%',
        }}
      >
        {users.map((user) => (
          <UserCard key={user._id} user={user} />
        ))}
      </div>
    </div>
  )
}
export default UserList
