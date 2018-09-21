import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.svg';

class Navigation extends Component {
    
    render() {
        return (
        <nav className="navbar navbar-dark bg-dark">
            <a href="" className="text-white">
                Tareas
            </a>
            <img src={logo} className="App-logo" alt="logo" />
        </nav>
        );
  }
}

export default Navigation;