import React from 'react';
import '../App.css';

const CartItemsList = ({
  product,
  quantity
}) => (
  // further destructuring
  // let {name, priceInCents} = product;
  <div className="list-group-item">
    <div className="row">
      <div className="col-md-8">{product.name}</div>
      <div className="col-md-2">${product.priceInCents}</div>
      <div className="col-md-2">{quantity}</div>
    </div>
  </div>
);


export default CartItemsList;
