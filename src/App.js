import React, { Component } from 'react';
import './App.css';
import Header from './header.js'
import Footer from './footer.js'
import Cart from './cart/cart.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Cart/>
        <Footer copy='2018'/>
      </div>
    );
  }
}

export default App;
