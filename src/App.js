import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return <div className="App">
        <nav class="white" role="navigation">
          <div class="nav-wrapper container">
            <ul class="toprow">
              <li>
                <a href="index.html" class="brand-logo">
                  <span id="logo-container">Adam Wallis</span>
                </a>
              </li>
              <li id="recentprojects">
                <a href="portfolio.html">
                  <span>Recent Projects</span>
                </a>
              </li>
              <li id="resume">
                <a href="https://www.dropbox.com/s/3pukaawyxzkm85h/AdamWallis_Resume%20-%20Google%20Docs.pdf?dl=0" target="_blank">
                  <span>Resume</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>;
  }
}

export default App;
