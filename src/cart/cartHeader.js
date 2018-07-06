import React from 'react';
import '../App.css';

const CartHeader = () => (
  <div className="list-group-item">
    <div className="row">
      <div className="col-md-8">Product</div>
      <div className="col-md-2">Price</div>
      <div className="col-md-2">Quantity</div>
    </div>
  </div>
);


export default CartHeader;
