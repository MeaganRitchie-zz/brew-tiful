import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

export default function Cart(props) {

  useEffect(() => { props.changeBackground(false) }, [])

  const renderCartItems = () => {
    return props.cart.map(item => {
      return <Card
        item={item}
        key={item.name}
        clickAction={props.clickAction}
        inCart={props.inCart}
      />
    })
  }
  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1>Your Cart</h1>
        {renderCartItems()}
        <Link to='./menu' id="shopping" className="button">Continue Shopping</Link>
        <span id="checkout" className="button">Continue to Checkout</span>
      </div>
    </div>
  )
}
