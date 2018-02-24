import React, { Component } from "react";


class Navigator extends Component {
  render() {
    return <nav className="white">
  <div className="nav-wrapper container">
    <ul className="toprow">
      <li>
        <a href="/#" className="brand-logo">
          <span id="logo-container">Adam Wallis</span>
        </a>
      </li>
      <li id="recentprojects">
        <a href="recentprojects">
          <span>Recent Projects</span>
        </a>
      </li>
      <li id="resume">
        <a
          href="https://www.dropbox.com/s/3pukaawyxzkm85h/AdamWallis_Resume%20-%20Google%20Docs.pdf?dl=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Resume</span>
        </a>
      </li>
    </ul>
  </div>
</nav>
  }
}

export default Navigator;
