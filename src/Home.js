import React from 'react';
import './Home.css';
import Macaron_Stack from './backgrounds/macaron_stack.png';
import Peach_Drink from './backgrounds/peach.png';
import Latte_Drink from './backgrounds/latte.png';

export default function Home(props) {

  return (
  <section> 
      <div className="content">
        <div className="textBox">
          <h2>It's not just coffee 
            <br/> 
            It's <span>Brew-tiful</span>
          </h2>
          <p>Really good and yummy puns here about food and goodies. 
            Really good and yummy puns here about food and goodies. 
            Really good and yummy puns here about food and goodies. 
            Really good and yummy puns here about food and goodies. 
            Really good and yummy puns here about food and goodies. 
            Really good and yummy puns here about food and goodies. 
          </p>
          <a className="button" href="./menu">See Our Menu</a>
        </div>
        <div className="imgBox">
          <img src={Macaron_Stack} className="brewtiful"></img>
        </div>
        < ul class="thumb">
          <li><img src={Latte_Drink}></img></li>
          <li><img src={Peach_Drink}></img></li>
          <li><img src={Macaron_Stack}></img></li>
        </ul>
      </div>
      <div className="circle"></div>
    </section>
  )
}
