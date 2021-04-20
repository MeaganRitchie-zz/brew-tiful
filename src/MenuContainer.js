import React from 'react';
import Card from './Card';

export default function MenuContainer(props) {

  const renderCard = () => {
    return props.menu.map(item => {
      return <Card item={ item } key={ item.name } clickAction={ props.clickAction }/>
    })
  }


  return (
    <div className="menu-container">
      <h1>Menu Items</h1>
      {renderCard()}
    </div>
  )
}
