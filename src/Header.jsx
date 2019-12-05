import React, { Component } from "react";
import logo from './logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-header-links">
          <div className="Link-history">
            <a href="#history">History</a>
          </div>
          <div className="Link-learn">
            <a href="#learn">Learn</a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
