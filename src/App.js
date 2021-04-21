import React, { Component } from 'react';
import Cart from './Cart';
import MenuContainer from './MenuContainer';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home'

export default class App extends Component {

  state = {
    menu: [],
    cart: [],
    inCart: false,
    like: false,
  }

  componentDidMount() {
    fetch('http://localhost:3000/items')
      .then(response => response.json())
      .then(items =>
        this.setState({ menu: items })
      )
  }

  addLike = () => {
    this.setState({ like: true })
  }

  addItemToCart = (clickedItem) => {
    const findMatch = this.state.cart.find(item => item === clickedItem)

    if (!findMatch) {
      this.setState({
        cart: [...this.state.cart, clickedItem]
      })
      this.setState({
        inCart: true
      })
    }
    alert("Added to Cart!")
  }

  removeItemFromCart = (clickedItem) => {
    const newCart = this.state.cart.filter(item => item.name !== clickedItem.name)

    this.setState({
      cart: newCart
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route
              exact path="/"
              component = { Home }
            />
            <Route
              path="/cart"
              render={() =>
                <Cart
                  cart={this.state.cart}
                  clickAction={this.removeItemFromCart}
                  like={this.state.like}
                  inCart={this.state.inCart}
                />
              }
            />
            <Route
              path="/menu"
              render={() =>
                <MenuContainer
                  menu={this.state.menu}
                  clickAction={this.addItemToCart}
                  like={this.state.like}
                  addLike={this.addLike}
                />
              }
            />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

