import React, { Component } from "react";
import Sandwich from "./Sandwich.js";
import { Link } from "react-router-dom";
import './NavMatter.css';

class Navigator extends Component {
  render() {
    return <nav className="white">
        <div className="nav-wrapper container">
          <ul className="toprow">
            <li >
              <Link to="/#" className="brand-logo">
                <span id="logo-container">Adam Wallis</span>
              </Link>
            </li>
            <li >
              <Link to="recentprojects">
                <span id="recentprojects">Recent Projects</span>
              </Link>
            </li>
            <li id="resume">
              <Link to="https://www.dropbox.com/s/qkr9ztaimcf84r9/AdamWallis_Resume%20-%20Google%20Docs.pdf?dl=0" target="_blank" rel="noopener noreferrer">
                <span>Resume</span>
              </Link>
            </li>
            <Sandwich />
          </ul>
        </div>
      </nav>;
  }
}

export default Navigator;
