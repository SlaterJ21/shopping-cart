import React from 'react';
import './App.css';

const Footer = (props) => (
  <nav className="navbar navbar-dark bg-dark">
    <a className="navbar-brand">&copy; {props.copy}</a>
  </nav>
);

export default Footer;
