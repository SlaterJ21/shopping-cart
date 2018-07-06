import React, { Component } from 'react';
import './App.css';
import Header from './header.js'
import Footer from './footer.js'
import CartItems from './cartItems.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <CartItems/>
        <Footer/>
      </div>
    );
  }
}

export default App;
