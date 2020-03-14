import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js';
import { Component } from 'react';
import Products from './Products.js';
// import ColoredBlock from './ColoredBlock.js'

// let time = new Date().toLocaleString();

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>
            My React Products List App
          </h1>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
        {/* <div className="main-content">
          <ColoredBlock></ColoredBlock> */}
          {/* <Clock ></Clock> */}
        {/* </div> */}
        <section>
          <Products></Products>
        </section>
        <footer>Copyright kayluv 2020</footer>
      </div>
    );
  }
  
}

export default App;
