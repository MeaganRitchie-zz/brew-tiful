import React, { useState } from 'react';

export default function Card(props) {

  const handleClick = () => {
    props.clickAction(props.item)
  }

  const handleLike = () => {
    props.addLike(props.item)
  }

  const [color, setColor] = useState("rgb(251, 237, 236)");
  const [font, setFont] = useState("rgb(228,106,153)")
  const [icon, setIcon] = useState("fas fa-shopping-basket");

  const changeColor = (color, font) => {
    setColor(color)
    setFont(font)
  }

  const changeIcon = (icon) => {
    setIcon(icon)
  }

  return (
    <div className="menu-item">
      <img src={props.item.image} alt='food' />
      <div className="menu-item-details">
        <h1>{props.item.name}</h1>
        <div id="category">
          <i className={props.item.category_img}></i>
          {/* <span id="space"> ~ </span> */}
          <span> {props.item.category_name}</span>
        </div>
        <p>. . . . . . . . . . . . . . . . . .</p>
        <div className="like-buttons">
          <button 
            onClick={handleLike} 
            className="button" > {props.item.like ? 
              < i className="fas fa-heart"></i> :
              < i className="far fa-heart"></i>} 
          </button>
          <button 
            className="button">{<i class="far fa-share-square"></i>}</button>
        </div>
        <p>. . . . . . . . . . . . . . . . . .</p>
        <button 
          onClick={() => {handleClick(); changeIcon("fas fa-check"); changeColor("rgb(228,106,153)", "rgb(251, 237, 236)")}}
          style={{backgroundColor: color , color: font}}
          id="add"
          className="button" >
              < i className={icon}>
              </i>{props.inCart ? 
                "Remove" : "Add to Cart"}
        </button>
      </div>
    </div >
  )
}
