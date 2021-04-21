import React from 'react';
import './Home.css';
import Macaron_Stack from './backgrounds/macaron_stack.png';
import Rasp_Macaron from './backgrounds/rasp_macaron.png';

export default function Home() {
  return (
  <section> 
      <div className="circle"></div>
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
          <a href="./menu">See Our Menu</a>
        </div>
        <div className="imgBox">
          <img src={Macaron_Stack} class="brewtiful"></img>
        </div>
        < ul class="thumb">
          <li><img src={Rasp_Macaron}></img></li>
          <li><img src=""></img></li>
          <li><img src=""></img></li>
        </ul>
      </div>
    </section>
  )
}
