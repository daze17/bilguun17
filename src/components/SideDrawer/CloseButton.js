import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import classes from './CloseButton.module.css'

const CloseButton = ({ click }) => (
  <div className={classes.container}>
    <IconButton className={classes.toggle_button} onClick={click}>
      <Icon className="fas fa-times" />
    </IconButton>
  </div>
)

export default CloseButton
