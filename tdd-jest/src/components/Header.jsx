import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img src="images/logo.jpg" alt="Logo" width="480" />
        <h1>
          Basketball Court Locator
        </h1>
        <p>Powered by React v{React.version}</p>
      </div>
    );
  }
}

export default Header;
