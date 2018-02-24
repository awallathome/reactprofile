import React, { Component } from 'react';
import './App.css';
import Footer from "./Components/Footer.js";
import FrontMatter from "./Components/FrontMatter.js";
import Navigator from "./Components/NavMatter.js";

class App extends Component {
  render() {
    return <div className="App">

        <Navigator />
        <FrontMatter />
        <Footer />
      
      </div>;
  

  }
}

export default App;
