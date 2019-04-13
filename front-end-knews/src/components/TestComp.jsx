import React, { Component } from "react";
import CreateArticleButton from "./CreateArticleButton";
import { Link } from "@reach/router";

class TestComp extends Component {
  state = {
    hideLogin: null,
    clickedLogin: false
  };
  render() {
    const { hideLogin, clickedLogin } = this.state;
    const { username, openTopics, validUsername, userLoggedIn } = this.props;

    return (
      <div>
        {!hideLogin && (
          <div>
            <label>
              Username
              <input
                className='inputBox'
                onChange={this.changeAppUsername}
                type='text'
              />
            </label>
            <button
              type='submit'
              className='button'
              value='logIn'
              onClick={this.loginApp}
            >
              Login
            </button>
          </div>
        )}
        {validUsername ? <> </> : <p className='errMsg'>Invalid UserName</p>}

        {userLoggedIn && (
          <div>
            <button
              onClick={this.logAppOut}
              className='button'
              id='logOutButton'
            >
              Log Out
            </button>
            <CreateArticleButton />
          </div>
        )}
      </div>
    );
  }
  hideAll = () => {
    if (this.state.hideLogin === false) {
      this.setState({ hideLogin: true });
    }
  };
  showAll = () => {
    if (this.state.hideLogin === true) {
      this.setState({ hideLogin: false });
    }
  };
  changeAppUsername = event => {
    const value = event.target.value;
    this.props.usernameChange(value);
  };
  loginApp = () => {
    this.props.loggedIn();
    this.setState({ clickedLogin: true });
    this.setState({ hideLogin: true });
  };
  viewAppProfile = () => {
    this.props.viewProfile();
  };
  logAppOut = () => {
    this.props.loggedOut();
  };
}

export default TestComp;

{
  /* <div>
  {showLogin ? (
    !userLoggedIn ? (
      <div>
        <p>Sample Username: tickle122</p>
        <label>
          Username
                <input
            className='inputBox'
            onChange={this.changeAppUsername}
            type='text'
          />
          <button
            type='submit'
            className='button'
            value='logIn'
            onClick={this.loginApp}
          >
            Login
                </button>
        </label>
      </div>
    ) : (
        <span id='loggedIn'>
          <p id='loggedInUser'>{`logged in as ${username}`}</p>
          <Link to={`user/${username}`}>
            <button
              id='profileButton'
              type='button'
              className='button'
              onClick={this.viewAppProfile}
            >
              Profile
                </button>
          </Link>
          <button
            onClick={this.logAppOut}
            className='button'
            id='logOutButton'
          >
            Log Out
              </button>
          <CreateArticleButton />
        </span>
      )
  ) : (
       ) : validUsername && !userLoggedIn ? (
         <p className='errMsg'>Invalid UserName</p>
      <> </>
    )}
</div> */
}
