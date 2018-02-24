import React, { Component } from "react";


class RecentProjects extends Component {
  render() {
    return <div className="container">
        <div className="row">
          <div className="col-xs-6">
            <h1>On The Fly</h1>
            <img src="./Images/onthefly1.png" alt=" unreachable" />
            <h4>
              The user is immediately joined to a unique chat room and
              prompted to enter a name they wish to use.
            </h4>
          </div>
          <div className="col-xs-6">
            <img src="./Images/onthefly2.png" alt=" unreachable" />
            <h4>The chat area defaults to a decoy conversation.</h4>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-6">
            <img src="./Images/onthefly3.png" alt=" unreachable" />
            <h4>
              Toggling with the 'esc' key, the can switch to an actual
              conversation.
            </h4>
          </div>
          <div className="col-xs-6">
            <img src="./Images/onthefly4.png" alt=" unreachable" />
            <h4>
              The chat room can be created in advance of any planned meeting
              or created on the fly. The invite button presents a link for
              using to invite people.
            </h4>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-6">
            <img src="./Images/onthefly5.png" alt=" unreachable" />
            <h4>
              The Delete Chat button offers the option to remove the
              conversation from the Mongo DB database and clear the room's
              conversation.
            </h4>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-6">
            <h1>LabLocator</h1>
            <img src="./Images/lablocator1.jpg" alt=" unreachable" />
            <h4>
              The user enters their starting location and a prefered radius
              for the search.
            </h4>
          </div>
          <div className="col-xs-6">
            <img src="./Images/lablocator2.jpg" alt=" unreachable" />
            <h4>
              Lab Locator offers a list of all labs that offer blood work in
              their network within the chosen radius.
            </h4>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-6">
            <img src="./Images/lablocator3.jpg" alt=" unreachable" />
            <h4>
              There is an admin login for adding/deleting labs from batabase
              or for editing information of existing labs. This page
              previously employed firebase authentication, but I am
              currently looking for more interesting log-in options.{" "}
            </h4>
          </div>
          <div className="col-xs-6">
            <img src="./Images/lablocator4.jpg" alt=" unreachable" />
            <h4>
              The admin page, inaccessible without logging in, offers easy
              editing abilities and is scalable for larger and smaller
              networks.
            </h4>
          </div>
        </div>
      </div>;

  }
};

export default RecentProjects;