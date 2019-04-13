import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import { fetchAllUsers } from "./api";
import "./App.css";
import Title from "./components/title";
import Articles from "./components/articles/Articles";
import Article from "./components/article/Article";
import TopicList from "./components/topicList/TopicList";

import CreateArticle from "./components/CreateArticle/CreateArticle";
import UserProfile from "./components/profile/UserProfile";
import PageNotFound from "./components/404";

class App extends Component {
  state = {
    username: "",
    loggedIn: false,
    validUsername: null
  };
  render() {
    return (
      <div className='App'>
        <Title data-cy='title' />
        {!this.state.loggedIn ? (
          <div>
            <p>Guest Username: tickle122</p>
            <label>
              Username
              <input
                className='inputBox'
                onChange={this.usernameChange}
                type='text'
              />
              <button
                type='submit'
                className='button'
                value='logIn'
                onClick={this.LoggedIn}
              >
                Login
              </button>
            </label>
          </div>
        ) : (
          <span id='loggedIn'>
            <p id='loggedInUser'>{`logged in as ${this.state.username}`}</p>
            <Link to={`user/${this.state.username}`}>
              <button
                id='profileButton'
                type='button'
                className='button'
                onClick={this.viewProfile}
              >
                Profile
              </button>
            </Link>
            <button
              onClick={this.LoggedOut}
              className='button'
              id='logOutButton'
            >
              Log Out
            </button>
          </span>
        )}
        {this.state.validUsername && !this.state.loggedIn ? (
          <p className='errMsg'>Invalid UserName</p>
        ) : (
          <> </>
        )}
        <Router className='app-main-route'>
          <TopicList path='/topics' />
          <Articles path='/' user={this.state.username} />
          <Articles
            path='/articles/topic/:topic_id'
            user={this.state.username}
          />
          <Articles path='/articles/user/:author' user={this.state.username} />
          <Article path='/articles/:article_id' user={this.state.username} />
          <CreateArticle
            path='/article/createArticle'
            user={this.state.username}
          />
          <UserProfile path='/user/:username' user={this.state.username} />
          <PageNotFound default />
        </Router>
      </div>
    );
  }
  usernameChange = e => {
    const username = e.target.value;
    this.setState({ username });
  };
  LoggedIn = e => {
    if (this.state.username.length === 0) this.setState({ loggedIn: false });
    fetchAllUsers().then(res => {
      const validUser = [];
      for (let i = 0; i < res.length; i++) {
        if (res[i].username === this.state.username) validUser.push(res[i]);
      }
      if (validUser.length === 1) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ validUsername: true });
      }
    });
  };
  LoggedOut = () => {
    this.setState({ loggedIn: false });
  };
}

// saveUserName = () => {
//   localStorage.setItem(this.state.username, JSON.stringify(this.state));
// };

export default App;
