import { Link } from "@reach/router";
import { navigate } from "@reach/router";
import React, { Component } from "react";

class title extends Component {
  render() {
    const { loggedIn } = this.props;

    return (
      <div className='navbar'>
        <Link to={"/"}>
          <button onClick={this.homeLink} id='homeButton'>
            <h1 id='mainTitle'> NorthCoders News</h1>
          </button>
        </Link>

        <Link to={"/topics"}>
          <i className='arrowDown' onClick={this.openTopics} />
        </Link>
        {loggedIn && (
          <div onClick={this.profilePage} id='profileButton'>
            <ProfileButton />
          </div>
        )}
      </div>
    );
  }
  homeLink = () => {
    console.log("navigate");
    navigate("/");
  };
  openTopics = () => {
    navigate("/topics");
  };
  profilePage = () => {
    const username = this.props.username;
    navigate(`user/${username}`);
  };
}

export default title;

export const ProfileButton = () => {
  return (
    <div className='_profile'>
      <div className='_head' />
      <div className='_body' />
    </div>
  );
};
