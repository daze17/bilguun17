import React from 'react'
import Icon from '@material-ui/core/Icon'
import './DrawerToggleButton.css'

const DrawerToggleButton = ( {click} ) =>{
    return(
        <div className="button-container">
            <button className="toggle_button" onClick={click} >
                <Icon className="fas fa-bars"/>
            </button>
        </div>
    )
}

export default DrawerToggleButton