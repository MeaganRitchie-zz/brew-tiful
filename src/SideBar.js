import React from 'react'

export default function SideBar(props) {

  const handleClick = (event) => {
    props.changeSelected(event.target.name)
  }
  return (
    <div className="aside">
      <p id="title" >Menu Items</p>
      {props.selected === "all" ?
        <button onClick={handleClick} name="all" style={{ backgroundColor: "rgb(84, 150, 232)", color: "rgb(206,241,253)" }}>All Products</button> :
        <button onClick={handleClick} name="all">All Products</button>
      }
      <h3>. . . . . . . . . .</h3>
      <p>Drinks</p>
      {
        props.selected === "Hot Drink" ?
          <button onClick={handleClick} name="Hot Drink" style={{ backgroundColor: "rgb(84, 150, 232)", color: "rgb(206,241,253)" }}>Hot Drinks</button> :
          <button onClick={handleClick} name="Hot Drink">Hot Drinks</button>
      }
      {
        props.selected === "Cold Drink" ?
          <button onClick={handleClick} name="Cold Drink" style={{ backgroundColor: "rgb(84, 150, 232)", color: "rgb(206,241,253)" }}>Cold Drinks</button> :
          <button onClick={handleClick} name="Cold Drink">Cold Drinks</button>
      }
      <h3>. . . . . . . . . .</h3>
      <p>Food</p>
      {
        props.selected === "Pastry" ?
          <button onClick={handleClick} name="Pastry" style={{ backgroundColor: "rgb(84, 150, 232)", color: "rgb(206,241,253)" }}>Pastries</button> :
          <button onClick={handleClick} name="Pastry">Pastries</button>
      }
    </div>
  )
}
