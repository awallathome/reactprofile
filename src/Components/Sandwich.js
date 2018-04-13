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
      setTimeout(
        function() {
          this.setState({ display: "hidden" });
        }.bind(this), 2500);
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
        <div className="popupItems" id={this.state.display}>
          <div onClick={this.openSandwich}>
            <Link to="recentprojects">
              <div className="popupItem">
                <p>Recent Projects</p>
              </div>
            </Link>
          </div>
        
          <a href="https://www.dropbox.com/s/2b1quvvdw6lw6xv/AdamWallis_Resume%20-%20Google%20Docs.pdf?dl=0"  target="blank" rel="noopener noreferrer">
            <div className="popupItem">
              <p>Resume</p>
            </div>
          </a>
          <Link to="/ghapidemo" rel="noopener noreferrer">
            <div className="popupItem">
              <p>GitHub Info</p>
            </div>
          </Link>
        </div>
      </div>;
  }
}

export default Sandwich; 
