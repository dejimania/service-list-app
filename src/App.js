import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js';
import { Component } from 'react';

// let time = new Date().toLocaleString();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            Welcome to React
          </h2>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
        <div>
          <p className="App-intro">
          Hi {this.props.name}
          </p>
          <Clock ></Clock>
        </div>
      </div>
    );
  }
  
}

export default App;
