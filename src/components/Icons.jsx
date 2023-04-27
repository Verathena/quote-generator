import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Icons = () => {
    return(
        <div>
        <button><FontAwesomeIcon icon={faTwitter} size="xs" /></button>
        <button><FontAwesomeIcon icon={faFacebook} size="xs" /></button>
        </div>

)
    
}

export default Icons