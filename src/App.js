import React, { Component } from 'react'
import MenuContainer from './MenuContainer'
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
  render() {
    return (
      <div>
        <MenuContainer menu={this.state.menu} />

      </div>
    )
  }
}

