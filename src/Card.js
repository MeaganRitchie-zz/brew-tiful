import React from 'react'

export default function Card(props) {

  const handleClick = () => {
    props.clickAction(props.item)
  }

  return (
    <div className="menu-item">
      <img src={ props.item.image } alt='food' />
      <div className="menu-item-details">
        <h1>{ props.item.name }</h1>
        <button onClick={ handleClick } className="button" >Add To Cart</button>
      </div>
    </div>
  )
}
