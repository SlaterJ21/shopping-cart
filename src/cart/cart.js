import React, { Component } from 'react';
import '../App.css';
import ItemFormat from './itemFormat.js'


class Cart extends Component {
  render() {
    return (
      <div className="container">
        <h1>Cart Items</h1>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-8">Product</div>
              <div className="col-md-2">Price</div>
              <div className="col-md-2">Quantity</div>
            </div>
          </div>
            <div>
              { this.props.list.map((item, i)=> <ItemFormat key={i} product={item.product} quantity={item.quantity}/>) }
            </div>
        </div>
      </div>
    );
  }
}

export default Cart;
