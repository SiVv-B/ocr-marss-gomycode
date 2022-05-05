import React from 'react'
import './Popup.css'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <Tooltip title="Annuler et Fermer l'onglet">
          <IconButton
            className="close-btn"
            onClick={() => props.setTrigger(false)}
          >
            <HighlightOffIcon />
          </IconButton>
        </Tooltip>
        {props.children}
      </div>
    </div>
  ) : (
    ''
  )
}

export default Popup
