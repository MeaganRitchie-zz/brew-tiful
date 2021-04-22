import React from 'react'

export default function SideBar(props) {

  const handleClick = (event) => {
    props.changeSelected(event.target.name)
  }
  return (
    <aside className="aside-container">
      {props.selected === "all" ?
        <button onClick={handleClick} name="all" style={{ backgroundColor: "rgb(228, 106, 153)", color: "rgb(251, 237, 236)" }}>See All Items</button> :
        <button onClick={handleClick} name="all">See All Items</button>
      }
      {
        props.selected === "Hot Drink" ?
          <button onClick={handleClick} name="Hot Drink" style={{ backgroundColor: "rgb(228, 106, 153)", color: "rgb(251, 237, 236)" }}>Hot Drinks</button> :
          <button onClick={handleClick} name="Hot Drink">Hot Drinks</button>
      }
      {
        props.selected === "Cold Drink" ?
          <button onClick={handleClick} name="Cold Drink" style={{ backgroundColor: "rgb(228, 106, 153)", color: "rgb(251, 237, 236)" }}>Cold Drinks</button> :
          <button onClick={handleClick} name="Cold Drink">Cold Drinks</button>
      }
      {
        props.selected === "Pastry" ?
          <button onClick={handleClick} name="Pastry" style={{ backgroundColor: "rgb(228, 106, 153)", color: "rgb(251, 237, 236)" }}>Pastries</button> :
          <button onClick={handleClick} name="Pastry">Pastries</button>
      }
    </aside>
  )
}
