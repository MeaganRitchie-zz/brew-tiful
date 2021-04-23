import React from 'react';
import { Link } from 'react-router-dom';
import Rasp_Macaron from './backgrounds/rasp_macaron.png';

export default function NavBar(props) {

  return (
    <div id="navbar">
      <img src={Rasp_Macaron} alt="macaron" />
      <Link onClick={() => props.changeBackground(true)} to="/">HOME</Link>
      <Link onClick={() => props.changeBackground(false)} to="/menu">MENU</Link>
      <Link onClick={() => props.changeBackground(false)} id="cart-link" to="/cart"><i className="fas fa-shopping-basket"></i> <span>CART</span></Link>
      {/* <a id="cart-link" href="/cart">{<i class="fas fa-shopping-basket"></i>}CART</a> */}
    </div>
  )
}
