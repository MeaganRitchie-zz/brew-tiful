import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar() {

  return (
    <div id="navbar">
      <Link to="/">HOME</Link>
      <Link to="/menu">MENU</Link>
      <Link id="cart-link" to="/cart"><i className="fas fa-shopping-basket"></i> <span>CART</span></Link>
      {/* <a id="cart-link" href="/cart">{<i class="fas fa-shopping-basket"></i>}CART</a> */}
    </div>
  )
}
