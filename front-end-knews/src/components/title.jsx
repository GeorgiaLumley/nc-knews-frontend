import { Link } from "@reach/router";
import { navigate } from "@reach/router";
import React, { Component } from "react";

class title extends Component {
  render() {
    return (
      <div>
        <Link to={"/"}>
          <button
            onClick={this.homeLink}
            onClick={this.openTopics}
            id='homeButton'
          >
            <h1 id='mainTitle'> NorthCoders News</h1>
          </button>
        </Link>

        <Link to={"/topics"}>
          <i className='arrowDown' onClick={this.openTopics} />
        </Link>
        {/* <p>Logged in as {props.username}</p> */}
      </div>
    );
  }
  homeLink = () => {
    console.log("hi");
    navigate("/");
  };
  openTopics = () => {
    if (this.props.userLoggedIn === false) {
      this.homeLink();
    }
    this.props.showLogin();
  };
}

export default title;
