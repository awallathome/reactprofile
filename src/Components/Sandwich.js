import React, { Component } from "react";
import './Sandwich.css';

function openSandwich(e) {
  e.preventDefault();

  // here is where I need to change the styling of the 'hidden' div below
  ("#hidden").display = 'block';
}


class Sandwich extends Component {
  render () {
    return <div className="sandwichesMenu" id="menu" onClick={openSandwich}>
      <div className="sandwich" />
      <div className="sandwich" />
      <div className="sandwich" />
      <div className="sandwichItemsDiv" id="hidden">
        <p className="sandwichItems sandwichRecentProjects">Recent Projects</p>
        <p className="sandwichItems sandwichResume">Resume</p>
      </div>
    </div>;
  }
};

export default Sandwich; 
