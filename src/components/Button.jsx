import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faVolumeLow } from '@fortawesome/free-brands-svg-icons';

 const Button = (props) =>{
  

  

  return(
    <div>
        <button onClick={props.onClick1}>read</button>
        <button><FontAwesomeIcon icon={faTwitter} size="sm" /></button>
        <button><FontAwesomeIcon icon={faFacebook} size="sm" /></button>
        <button onClick = {props.onClick2}> New Quote </button>
    </div>
    
  )
}

export default Button
