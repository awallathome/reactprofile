import React, { Component } from 'react';
import './App.css';
import Footer from "./Components/Footer.js";
import FrontMatter from "./Components/FrontMatter.js";
import Navigator from "./Components/NavMatter.js";
import RecentProjects from "./Components/RecentProjects.js";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GHAPIDemo from "./Components/GHAPIDemo.js";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { data: "false" };
  }
  //not all browsers support fetch; find alternatives useful for the same call
  componentDidMount = (req, d) => {
    fetch("/api").then(d => {
      console.log("D:", d);
    });
  };
  render() {
    return (
      <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Navigator />
            <Switch>
              <Route exact path="/reactprofile" component={FrontMatter} />
              <Route exact path="/" component={FrontMatter} />
              <Route exact path="/recentprojects" component={RecentProjects} />
              <Route exact path="/ghapidemo" component={GHAPIDemo} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;