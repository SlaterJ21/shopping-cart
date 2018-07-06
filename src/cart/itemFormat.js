import React from 'react';
import '../App.css';

const CartItemsList = ({
  product: {name, priceInCents},
  quantity
}) => (
    <div className="list-group-item">
      <div className="row">
        <div className="col-md-8">{name}</div>
        <div className="col-md-2">${priceInCents}</div>
        <div className="col-md-2">{quantity}</div>
      </div>
    </div>
);


export default CartItemsList;
