import React, { Component } from 'react';
import './App.css';
import Footer from "./Components/Footer.js";
import FrontMatter from "./Components/FrontMatter.js";
import Navigator from "./Components/NavMatter.js";
import RecentProjects from "./Components/RecentProjects.js";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return <div className="App">
        <Navigator />
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={FrontMatter} />
              <Route exact path="/recentprojects" component={RecentProjects} />
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>;
  
  }
}

export default App;