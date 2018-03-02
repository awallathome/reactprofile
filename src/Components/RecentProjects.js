import React, { Component } from "react";
import onthefly1 from "./Images/onthefly1.png";
import onthefly2 from "./Images/onthefly2.png";
import onthefly3 from "./Images/onthefly3.png";
import onthefly4 from "./Images/onthefly4.png";
import onthefly5 from "./Images/onthefly5.png";
import lablocator1 from "./Images/lablocator1.jpg";
import lablocator2 from "./Images/lablocator2.jpg";
import lablocator3 from "./Images/lablocator3.jpg";
import lablocator4 from "./Images/lablocator4.jpg";
import './RecentProjects.css';

class RecentProjects extends Component {
  render() {
    return <div className="projContainer" >
        <div className="projectRow">
          <div className="projectTitle">
            <h1>Lab Locator</h1>
            <h6>A web app for locating nearby labs with for bloodwork. Employs Google Maps API.</h6>
          </div>
          <div className="colA">
            <img src={lablocator1} alt=" unreachable" />
            <h4>
              The user enters their starting location and a prefered radius
              for the search.
            </h4>
          </div>
          <div className="colB">
            <img src={lablocator2} alt=" unreachable" />
            <h4>
              Lab Locator offers a list of all labs that offer blood work in
              their network within the chosen radius.
            </h4>
          </div>
        </div>

        <div className="projectRow">
          <div className="colA">
            <img src={lablocator3} alt=" unreachable" />
            <h4>
              There is an admin login for adding/deleting labs from batabase
              or for editing information of existing labs. This page
              previously employed firebase authentication, but I am
              currently looking for more interesting log-in options.{" "}
            </h4>
          </div>
          <div className="colB">
            <img src={lablocator4} alt=" unreachable" />
            <h4>
              The admin page, inaccessible without logging in, offers easy
              editing abilities and is scalable for larger and smaller
              networks.
            </h4>
          </div>
        </div>

        <div className="projectRow">
          <div className="projectTitle">
            <h1>On the Fly</h1>
            <h6>A web app for realtime, confidential conversations across all platforms requireing no downloads or accounts. Employs socket.io.</h6>
          </div>
          <div className="colA">
            <img src={onthefly1} alt=" unreachable" />
            <h4>
              The user is immediately joined to a unique chat room and
              prompted to enter a name they wish to use.
            </h4>
          </div>
          <div className="colB">
            <img src={onthefly2} alt=" unreachable" />
            <h4>The chat area defaults to a decoy conversation.</h4>
          </div>
        </div>
        <div className="projectRow">
          <div className="colA">
            <img src={onthefly3} alt=" unreachable" />
            <h4>
              Toggling with the 'esc' key, the can switch to an actual
              conversation.
            </h4>
          </div>
          <div className="colB">
            <img src={onthefly4} alt=" unreachable" />
            <h4>
              The chat room can be created in advance of any planned meeting
              or created on the fly. The invite button presents a link for
              using to invite people.
            </h4>
          </div>
        </div>

        <div className="projectRow">
          <div className="colA">
            <img src={onthefly5} alt=" unreachable" />
            <h4>
              The Delete Chat button offers the option to remove the
              conversation from the Mongo DB database and clear the room's
              conversation.
            </h4>
          </div>
        </div>
      </div>;
  }
};

export default RecentProjects;