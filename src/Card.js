import React from 'react'

export default function Card(props) {

  const handleClick = () => {
    props.clickAction(props.item)
  }

  return (
    <div>
      <img src={ props.item.image } alt='food' />
      <h1>{ props.item.name }</h1>
      <button onClick={ handleClick }>Add To Cart</button>
    </div>
  )
}
