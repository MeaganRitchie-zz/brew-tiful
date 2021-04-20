import React from 'react'

export default function Card(props) {

  const handleClick = () => {
    props.clickAction(props.item)
  }

  const handleLike = () => {
    props.addLike(props.item)
  }


  return (
    <div className="menu-item">
      <img src={props.item.image} alt='food' />
      <div className="menu-item-details">
        <h1>{props.item.name}</h1>
        <div className="like-buttons">
          <button onClick={handleLike} className="button" > {props.like ? < i className="fas fa-heart"></i> : < i className="far fa-heart"></i>} </button>
          <button className="button">{<i class="far fa-share-square"></i>}</button>
        </div>
        <p>. . . . . . . . . . . . . . . . . .</p>
        <button onClick={handleClick} className="button" >{<i class="fas fa-shopping-basket"></i>} Add To Cart</button>
      </div>
    </div >
  )
}
