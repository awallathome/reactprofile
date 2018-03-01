import React, { Component } from "react";
import './Sandwich.css';
import { Link } from "react-router-dom";


class Sandwich extends Component {

  constructor() {
    super();
  
    this.state = {
      display: "hidden"
    };
  }

  openSandwich = (e) => {
    e.preventDefault();
    
    if (this.state.display === "hidden"){
      this.setState({ display: "block" });
    } else {
      this.setState({ display: "hidden" });
    }
  }
 

  render () {
    return <div className="sandwichesMenu" id="menu">
        <div onClick={this.openSandwich}>
          <div className="sandwich" />
          <div className="sandwich" />
          <div className="sandwich" />
        </div>
        <div  className="popupItems" id={this.state.display}>
          
            <Link to="recentprojects">
              <div><p>Recent Projects</p></div>
            </Link>
        
            <Link to="https://www.dropbox.com/s/3pukaawyxzkm85h/AdamWallis_Resume%20-%20Google%20Docs.pdf?dl=0" target="_blank" rel="noopener noreferrer">
              <div><p>Resume</p></div>
            </Link>
         
        </div>
      </div>;
  }
}

export default Sandwich; 
