import React, { Component } from "react";
import chairs from "./Images/chairs.jpg";
import bricks from "./Images/bricks.jpg";
import umbrella from "./Images/umbrella.jpg";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from 'react-scroll-parallax';

class FrontMatter extends Component {
  render () {
    return <div >
        
        <ParallaxProvider>
          <Parallax className="parallax" offsetYMax={100} offsetYMin={-20} slowerScrollRate>
            <div className="container">
              <div className="section">
                {/*Icon Section*/}
                <div className="row">
                  <div className="col s12 m4">
                    <div className="icon-block">
                      <h2 className="center brown-text">
                        <i className="material-icons">group</i>
                      </h2>
                      <h5>Front End Technologies</h5>

                      <p className="light">
                        HTML/CSS, JavaScript, jQuery, Responsive Design,
                        Materialize, Bootstrap , Handlebars, React.js, and
                        other odds and ends...{" "}
                      </p>
                    </div>
                  </div>

                  <div className="col s12 m4">
                    <div className="icon-block">
                      <h2 className="center brown-text">
                        <i className="material-icons">flash_on</i>
                      </h2>
                      <h5>Back End Technologies</h5>

                      <p className="light">
                        Experienced in Express, MySQL, MongoDB, Storage,
                        User Authentication, MERN Stack, Firebase, Writing
                        Tests, SEO, Semantic HTML, Java. Python is next on
                        my radar. Each framework has its strengths, and
                        finding the right one is a great feeling.
                      </p>
                    </div>
                  </div>

                  <div className="col s12 m4">
                    <div className="icon-block">
                      <h2 className="center brown-text">
                        <i className="material-icons">school</i>
                      </h2>
                      <h5>Education</h5>

                      <p className="light">
                        Web Development through UMass Amherst. I also
                        studied Theology, Philosophy, and Ethics long enough
                        to get a PhD. I understand people, logic, and the
                        reasons why we should value and improve the world. I
                        hope you enjoy my page and a few of my photos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="parallax-container valign-wrapper">
              <div className="section no-pad-bot">
                <div className="container">
                  <div className="row center">
                    {/*BOOKMARK*/}
                    {/*<h5 className="header col s12 light" />*/}
                  </div>
                </div>
              </div>
              <div className="parallax" id="img2">
                <img src={chairs} alt="Unsplashed background img 2" />
              </div>
            </div>

            <div className="container">
              <div className="section">
                <div className="row">
                  <div className="col s12 center">
                    <h3>
                      <i className="mdi-content-send brown-text" />
                    </h3>
                    <h4>
                      <a id="contact" href="mailto:adam.wallis@me.com">
                        Contact Me
                      </a>
                    </h4>
                    <p>
                      My brother taught me to learn from the best person in
                      the room. I love working on teams, learning from
                      peers, and working in demanding environments. If my
                      PhD proves anything, it's that I can endure and remain
                      productive during times of ambiguity. I value clear,
                      open communication because the content is the point.
                      Let's talk.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="parallax-container valign-wrapper">
              <div className="section no-pad-bot">
                <div className="container">
                  <div className="row center">
                    {/*BOOKMARK for possible new text*/}
                    {/*<h5 className="header col s12 light" />*/}
                  </div>
                </div>
              </div>
              <div className="parallax" id="img3">
                <img src={bricks} alt="Unsplashed background img 3" />
              </div>
            </div>
          </Parallax>
        </ParallaxProvider>
      </div>;
  }
}

export default FrontMatter;