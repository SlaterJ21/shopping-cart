import React from 'react';
import './App.css';

// class Footer extends Component {
//   render() {
//     return (
      // <nav className="navbar navbar-dark bg-dark">
//         <a className="navbar-brand" href="#">&copy; 2018</a>
//       </nav>
//     );
//   }
// }

const Footer = (props) => (
  <nav className="navbar navbar-dark bg-dark">
    <a className="navbar-brand" href="#">&copy; {props.copy}</a>
  </nav>
);

export default Footer;
