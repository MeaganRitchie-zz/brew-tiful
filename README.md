# Brew-tiful

## Table of Contents
* [General Info](#general-info)
* [Preview](#preview)
* [Intro Video](#intro-video)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Inspiration](#inspiration)
* [Contact](#contact)
* [License](#license)

## General Info
Love You A Latte Café is open for business!

## Preview

## Technologies
* React
* CSS

## Setup
To run this project, install it locally by cloning the GitHub repository and typing:
```
json-server --watch db.json
npm install
npm start
```
## Code Examples
```js
const [words,] = useState(props.item.isInCart ? "Already Added" : "Add To Cart")
  const [color, setColor] = useState(props.item.isInCart ? "rgb(228,106,153)" : "rgb(251, 237, 236)");
  const [font, setFont] = useState(props.item.isInCart ? "rgb(251, 237, 236)" : "rgb(228,106,153)")
  const [icon, setIcon] = useState(props.item.isInCart ? "fas fa-check" : "fas fa-shopping-basket");

  const changeColor = (color, font) => {
    setColor(color)
    setFont(font)
  }

  const changeIcon = (icon) => {
    setIcon(icon)
  }
```
```js
<button
          onClick={() => {
            handleClick();
            changeIcon("fas fa-check");
            changeColor("rgb(228,106,153)", "rgb(251, 237, 236)")
          }}
          style={{ backgroundColor: color, color: font }}
          id="add"
          className="button" >
          <i className={icon}></i>
          <span>{props.inCart ? "Remove" : words}</span>
        </button>
```
## Features
* User can navigate between Home, Menu, and Cart windows
* User experiences high-quality photos, animations, and previews the menu at the click of a button
* User can add and remove items from cart
* User can add and remove likes
* User can filter items by category

## Inspiration
Spring colors and our love for pastries and puns.

## Contact
Created by [Anika Bernstein](https://github.com/anikajb92) and [Meagan Ritchie](https://www.linkedin.com/in/meagan-ritchie-tech/)

## License
[Click to View](https://www.gnu.org/licenses/gpl-3.0.en.html)