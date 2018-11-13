import React, { Component } from 'react';
import './GHAPIDemo.css';
import fetch from 'isomorphic-fetch'

var gitHubAPI = "/github?search=";

class GHAPIDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      gitHubData: {}
    };
  }

  searchGitHub = (req, res) => {
    this.setState({ gitHubData: {}})
    fetch(req)
    .then(res => res.json())
    .then(res => {
      this.setState({ gitHubData: res });
    })
  };

  componentDidMount() {
    this.searchGitHub(gitHubAPI + "awallathome");
  }

  getValues = e => {
    console.log("Event: ", e);
    const value = e.target.value;
    console.log("Value: ", value);
    this.setState({ username: value });
  };

  getUserProfile = e => {
    e.preventDefault();
    this.searchGitHub(gitHubAPI + this.state.username);
    console.log("searching...")
  };

  render() {
      
    return (
      <div>
        <form>
          <div className='form'>
            <input
              className="userName"
              type="text"
              placeholder="Github login name..."
              onChange={this.getValues}
            />
          
            <button onClick={this.getUserProfile}>Get A Github User</button>
          </div>
        </form>

        <h2 className="gitItems gitHubName">{this.state.gitHubData.name}</h2>
        <a
          className="gitItems gitHubLink"
          href={this.state.gitHubData.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>GitHub Repositories</span>
        </a>

        <img
          className="gitItems gitHubPhoto"
          alt="Trust me. I am quite presentable."
          src={this.state.gitHubData.avatar_url}
        />
      </div>
    );
  }
}

export default GHAPIDemo;
