import React, { Component } from 'react';
import './App.css';
import Header from './header.js'
import Footer from './footer.js'
import Cart from './cart/cart.js'
import AddForm from './addForm/addForm.js'

const items = [
  { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
  { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
  { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
  { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
  { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
  { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
  { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
  { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
  { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
]

let list = []

class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        list: list,
      }
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
      const { name, value } = event.target
      if(name === 'quantity'){
        this.setState({quantity: value})
      }
      if(name === 'item'){
        const itemName = value;
        const item = items.filter(item => item.name === itemName);
          this.setState({
            product: item[0]
          });
      }
    }

      handleSubmit(event) {
        event.preventDefault();
        let item = list.filter(item => item.product.name === this.state.product.name);
        if (item.length === 1){
          let current = parseInt(this.state.quantity, 10)
          let add = parseInt(item[0].quantity, 10)
        } else {
          const listItem = list.push({id: 3, product: this.state.product, quantity: this.state.quantity})
          this.setState({
            list: listItem
          })
        }
        console.log(this.state)
      }

  render() {
    return (
      <div>
        <Header/>
        <Cart list={ list }/>
        <AddForm
          items={ items }
          list={ list }
          state={ this.state }
          handleSubmit={ this.handleSubmit }
          handleInputChange= { this.handleInputChange }
        />
        <Footer copy='2018'/>
      </div>
    );
  }
}

export default App;
