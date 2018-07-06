import React from 'react';
import '../App.css';
import ItemFormat from './itemFormat.js'


let list = [
  { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
  { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
  { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
]

const Items = () => (
  <div>
    { list.map(item=> <ItemFormat key={item.id} product={item.product} quantity={item.quantity}/>) }
  </div>
);


export default Items;
