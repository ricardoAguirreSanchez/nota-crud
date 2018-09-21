import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="h1">Welcome to React</h1>
      </div>
    );
  }
}

export default Header;