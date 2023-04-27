import React from 'react';

 const Button = () =>{
  const handleClick = () => {
     window.location.reload()
  }
  return(
    <button onClick = {handleClick}> New Quote </button>
  )
}

export default Button
