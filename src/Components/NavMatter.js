import React, { Component } from "react";
import Sandwich from "./Sandwich.js";
import { Link } from "react-router-dom";
import './NavMatter.css';

class Navigator extends Component {
  render() {
    return <nav className="white">
        <div>
          <ul className="toprow">
            <li>
              <Link to="reactprofile" className="brand-logo">
                <span id="logo-container">Adam Wallis</span>
              </Link>
            </li>
            <li>
              {/*<Link to="recentprojects">
                <span id="recentprojects">Recent Projects</span>
              </Link>*/}
            </li>
            <li id="resume">
              <a href="https://www.dropbox.com/s/2b1quvvdw6lw6xv/AdamWallis_Resume%20-%20Google%20Docs.pdf?dl=0" target="blank" rel="noopener noreferrer">
                <span>Resume</span>
              </a>
            </li>
            <li id="github">
              <Link to="ghapidemo" rel="noopener noreferrer">
                <span>GitHub Info</span>
              </Link>
            </li>
            <Sandwich />
          </ul>
        </div>
      </nav>;
  }
}

export default Navigator;