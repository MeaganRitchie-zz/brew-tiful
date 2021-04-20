import React, { Component } from 'react';
import Cart from './Cart';
import MenuContainer from './MenuContainer';

export default class App extends Component {

  state = {
    menu: [],
    cart: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/items')
      .then(response => response.json())
      .then(items =>
        this.setState({ menu: items })
      )
  }

  addItemToCart = (clickedItem) => {
    const findMatch = this.state.cart.find(item => item === clickedItem)

    if(!findMatch){
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
        <Cart cart={ this.state.cart } clickAction={ this.removeItemFromCart }/>
        <MenuContainer menu={ this.state.menu } clickAction={ this.addItemToCart }/>

      </div>
    )
  }
}

