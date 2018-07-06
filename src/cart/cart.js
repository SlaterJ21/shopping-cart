import React, { Component } from 'react';
import '../App.css';
import Items from './items.js'
import CartHeader from './cartHeader.js'

class Cart extends Component {
  render() {
    return (
      <div className="container">
        <h1>Cart Items</h1>
        <div className="list-group">
          <CartHeader/>
          <Items/>
        </div>
      </div>
    );
  }
}

export default Cart;
