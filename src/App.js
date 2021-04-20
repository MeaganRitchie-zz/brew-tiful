import React, { Component } from 'react';
import Cart from './Cart';
import MenuContainer from './MenuContainer';
import './App.css';
import NavBar from './NavBar';

export default class App extends Component {

  state = {
    menu: [],
    cart: [],
    like: false
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
      console.log('Add to cart was clicked')
    }
  }

  removeItemFromCart = (clickedItem) => {
    const newCart = this.state.cart.filter(item => item.name !== clickedItem.name)

    this.setState({
      cart: newCart
    })
  }

  render() {
    return (
      <div>
        <NavBar />
        <Cart cart={this.state.cart} clickAction={this.removeItemFromCart} like={this.state.like} />
        <MenuContainer menu={this.state.menu} clickAction={this.addItemToCart} like={this.state.like} addLike={this.addLike} />

      </div>
    )
  }
}

