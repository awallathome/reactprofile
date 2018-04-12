import React, { Component } from 'react';
import './GHAPIDemo.css';

const gitHubAPI = 'https://api.github.com/users/awallathome';

class GHAPIDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gitHubData: {}
    }
  }

  componentDidMount() {
    fetch(gitHubAPI)
      .then(d => d.json())
      .then(d => {
        this.setState({
          gitHubData: d
        })
      })
  };

  render() {
    return <div>

        <h2 className="gitItems gitHubName">
          {this.state.gitHubData.name}
        </h2>
        <a className="gitItems gitHubLink" href={this.state.gitHubData.html_url} target="_blank" rel="noopener noreferrer">
          <span>GitHub Repositories</span>
        </a>

        <img className="gitItems gitHubPhoto" alt="Trust me. I am quite presentable." src={this.state.gitHubData.avatar_url} />
      </div>;
  }
}

export default GHAPIDemo;