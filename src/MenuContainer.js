import React from 'react';
import Card from './Card';

export default function MenuContainer(props) {

  const renderCard = () => {
    if (props.selected === "all") {
      return props.menu.map(item => {
        return <Card
          item={item}
          key={item.name}
          clickAction={props.clickAction}
          like={props.like}
          addLike={props.addLike}
        />
      })
    } else {
      let items = props.menu.filter(item => item.category_name === props.selected)
      return items.map(item => {
        return <Card
          item={item}
          key={item.name}
          clickAction={props.clickAction}
          like={props.like}
          addLike={props.addLike}
        />
      })
    }
  }


  return (
    <div>
      {/* <h1>Menu Items</h1> */}
      <div className="menu-container">
        {renderCard()}
      </div>
    </div>
  )
}
