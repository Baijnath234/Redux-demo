import React from 'react'


interface ButtonProps{
  Label : string;
}

const Button = ({Label}:ButtonProps) => {
  return (
    <div className='uk-button'>
      <a href='##' className='uk-btn-primary'>{Label}</a>
    </div>
  )
}

export default Button
