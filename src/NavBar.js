import React from 'react'

export default function NavBar() {

  return (
    <div id="navbar">
      <a href="#home">HOME</a>
      <a href="#menu">MENU</a>
      <a id="cart-link" href="#cart">{<i class="fas fa-shopping-basket"></i>}CART</a>
    </div>
  )
}
