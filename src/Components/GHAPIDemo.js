import React, { Component } from 'react';
import './GHAPIDemo.css';



var gitHubAPI = "/github?search=";
class GHAPIDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      gitHubData: {}
    };
  }

  searchGitHub = username => {
    fetch(username)
      .then(d => d.json())
      .then(d => {
        this.setState({ gitHubData: d });
      });
  };

  componentDidMount() {
    this.searchGitHub(gitHubAPI + "awallathome");
  }

  getValues = e => {
    console.log("Event: ", e);

    const value = e.target.value;
    const name = e.target.name;

    console.log("Value: ", value);
    console.log("Name: ", name);

    this.setState({ [name]: value });
  };

  getUserProfile = e => {
    e.preventDefault();
    this.searchGitHub(gitHubAPI + this.state.username);
  };
  // destructuring

  // { target : { name: "", value: "" } }

  // getValues = ({ target: { name, value }}) => this.setState({ [name]: value});

  render() {
    return (
      <div>
        <form>
          <input
            name="username"
            type="text"
            placeholder="username..."
            onChange={this.getValues}
          />
          <button onClick={this.getUserProfile}>Get Github User</button>
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


const user = {
  age: 5,
  name: "Peter",
  status: "graded"
};


user.age // 5
user.status  // graded

const { age, name, status } = user; // ES6


name// Peter
age // 5