import React from 'react'

export default function Card(props) {
  return (
    <div>
      <img src={props.item.image} alt='food' />
    </div>
  )
}
