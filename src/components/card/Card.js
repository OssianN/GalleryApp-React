import React from 'react';

const Card = (props) => {

  const handleFlip = e => {
    if(e.target.tagName === 'IMG') {
      setTimeout(() => {
        e.target.style = 'display: none'
      }, 300)
      e.target.parentElement.classList.add('flipCard')
    }
  }

  const handleFlipReset = e => {
    if(e.target.tagName === 'P') {
      setTimeout(() => {
        e.target.previousSibling.style = 'display: flex'
      }, 300)
      e.target.parentElement.classList.remove('flipCard')
    }
  }

  return (
    <div onMouseOver={handleFlip} onMouseLeave={handleFlipReset} className='cardContainer'>
      <img src={props.img} alt='' className='cardImage' />
      <p> {props.description} </p>
    </div>
  )
}

export default Card;
