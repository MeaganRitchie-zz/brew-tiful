import React from 'react'
import Card from './Card'
export default function MenuContainer(props) {

  const renderCard = () => {
    return props.menu.map(item => {
      return <Card item={item} />
    })
  }


  return (
    <div>
      {renderCard()}
    </div>
  )
}
