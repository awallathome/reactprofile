import React, { Component } from 'react';
import './App.css';
import Footer from "./Components/Footer.js";


class App extends Component {
  render() {
    return <div className="App">
        <nav className="white">
          <div className="nav-wrapper container">
            <ul className="toprow">
              <li>
                <a href="index.html" className="brand-logo">
                  <span id="logo-container">Adam Wallis</span>
                </a>
              </li>
              <li id="recentprojects">
                <a href="portfolio.html">
                  <span>Recent Projects</span>
                </a>
              </li>
              <li id="resume">
                <a href="https://www.dropbox.com/s/3pukaawyxzkm85h/AdamWallis_Resume%20-%20Google%20Docs.pdf?dl=0" target="_blank" rel="noopener noreferrer">
                  <span>Resume</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>


        <Footer />
      </div>;
  

  }
}

export default App;
