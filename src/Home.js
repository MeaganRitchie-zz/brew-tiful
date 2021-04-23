import React, { useState } from 'react';
import './Home.css';
import Macaron_Stack from './backgrounds/macaron_stack2.png';
import Latte_Drink from './backgrounds/latte.png';
import Cocktail from './backgrounds/cocktail.png';
import Iced_Latte from './backgrounds/iced_latte.png';
import Donut from './backgrounds/Donut3.png';


export default function Home() {

  const [image, setImage] = useState(Macaron_Stack);
  const [color, setColor] = useState("rgb(228,106,153)")

  const handleClick = (clickedImage) => {
    setImage(clickedImage)
  }

  const changeColor = (color) => {
    setColor(color)
  }

  return (
    <section>
      <div className="content">
        <div className="textBox">
          <h2>Welcome To
            <br />
            <span>Love You A Latte</span>
            <br />
            Café
          </h2>
          <p>Where we make dreams <strong>crumb</strong> true. Haven't been here before? </p>
          <p>Our hot drinks are <strong>mug</strong>-nificent. Our cold drinks are <strong>berry</strong> refreshing!</p>
          <p>It's never too late for <strong>choco</strong>-late! <strong>Muffin</strong> compares to our pastries</p>
          <p>Have a <strong>brew</strong>-tiful day! Keep livin' la vida <strong>mocha</strong>!</p>
          <p>XO Your main <strong>squeezes</strong> <i className="fas fa-lemon" ></i>, Meagan and Anika</p>
          <a className="button" href="./menu">See Our Menu</a>
        </div>
        <div className="imgBox">
          <img src={image} className="brewtiful"></img>
        </div>
        < ul className="thumb">
          <li><img
            src={Donut}
            alt="latte"
            id="donut"
            onClick={() => { handleClick(Donut); changeColor("rgb(229, 198, 241") }}
          ></img></li>
          <li><img
            src={Cocktail}
            alt="peach drink"
            id="cocktail"
            onClick={() => { handleClick(Cocktail); changeColor("rgb(232, 95, 86)") }}
          ></img></li>
          <li><img
            src={Macaron_Stack}
            alt="macaron stack"
            id="stack"
            onClick={() => { handleClick(Macaron_Stack); changeColor("rgb(228,106,153)") }}
          ></img></li>
        </ul>
      </div>
      <div
        className="circle"
        style={{ backgroundColor: color }}
      ></div>
    </section >
  )
}
