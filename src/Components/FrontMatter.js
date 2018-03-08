import React, { Component } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from 'react-scroll-parallax';
import "./FrontMatter.css";

class FrontMatter extends Component {
  render () {
    return <div className="renderDiv">
        <ParallaxProvider>
          <Parallax className="parallax" offsetYMax={100} offsetYMin={-20} slowerScrollRate>
            <div className="blurbSection">
         
              <div className="blurbs">
                <h2>
                  <i className="material-icons">group</i>
                </h2>
                <h5>Front End Technologies</h5>

                <p className="light">
                  HTML/CSS, JavaScript, jQuery, Responsive Design,
                  Materialize, Bootstrap , Handlebars, React.js, and other
                  odds and ends...{" "}
                </p>
              </div>

              <div className="blurbs">
                <h2>
                  <i className="material-icons">flash_on</i>
                </h2>
                <h5>Back End Technologies</h5>

                <p className="light">
                  Experienced in Express, MySQL, MongoDB, Storage, User
                  Authentication, MERN Stack, Firebase, Writing Tests, Socket.io,
                  Semantic HTML, Java. Python is next on my radar. Each
                  framework has its strengths, and finding the right one is
                  a great feeling.
                </p>
              </div>

              <div className="blurbs">
                <h2>
                  <i className="material-icons">school</i>
                </h2>
                <h5>Education</h5>

                <p className="light">
                  Web Development through UMass Amherst. I also studied
                  Theology, Philosophy, and Ethics long enough to get a MA.
                  I understand people, logic, and the reasons why we should
                  value and improve the world. I hope you enjoy my page and
                  a few of my photos.
                </p>
              </div>
            </div>

            <div className="imgSpace" />

            <div className="contactSection">
              <h3>
                <a id="contact" href="mailto:adam.wallis@me.com">
                  Contact Me
                </a>
              </h3>
              <p>
                My brother taught me to learn from the best person in the
                room. I love working on teams, learning from peers, and
                working in demanding environments. I value clear, open
                communication because the content is the point. Let's talk.
              </p>
            </div>
            
            <div className="imgSpace" />

          </Parallax>
        </ParallaxProvider>
      </div>;
  }
}

export default FrontMatter;