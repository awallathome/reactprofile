import React, { Component } from "react";
import './Sandwich.css';


class Sandwich extends Component {
  render () {
    return <div className="sandwichesMenu" onClick="openSandwich()">
        <div className="sandwiches" />
        <div className="sandwiches" />
        <div className="sandwiches" />
        <span className="sandwichItems">Recent Projects</span>
        <span className="sandwichItems">Resume</span>
      </div>;
  }
};

export default Sandwich; 
