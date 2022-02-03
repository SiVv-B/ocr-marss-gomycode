import React, { useEffect, useState } from 'react'
import IntervenantCard from './IntervenantCard'
import {useSelector} from "react-redux" 
import { useDispatch } from 'react-redux'
import {GetIntervenants} from '../../Redux/Actions/IntervenantActions'
import { Link } from 'react-router-dom'

import IconButton from '@mui/material/IconButton'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import Tooltip from '@mui/material/Tooltip'

 const IntervantsListe = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetIntervenants())
      }, [dispatch])

     const intervenants=useSelector(state=>state.IntervenantReducer.intervenants)
    console.log("liste des intervenants :", intervenants)

    
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
        <Link to="/intervenant-add">
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
          placeholder=" ⌕..Chercher un intervenant"
          style={{borderStyle:'none',width:'15%',}}
        />

        {intervenants
          .filter((intervenant) => {
            if (searchTerm == '') {
              return null
            } else if (
              intervenant.Prenom.toLowerCase().includes(searchTerm.toLowerCase()) || intervenant.Nom.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return <div>{intervenant}</div>
            }
          })
          .map((intervenant) => (
            <IntervenantCard key={intervenant._id} intervenant={intervenant} />
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
      }}>
            {intervenants.map((intervenant)=> <IntervenantCard key={intervenant._id} intervenant={intervenant}/>)}

            
        </div>
        </div>
    )
}
export default IntervantsListe