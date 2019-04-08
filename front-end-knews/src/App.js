import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import { fetchAllUsers } from "./axios";
import "./App.css";
import Title from "./components/title";
import Articles from "./components/articles/Articles";
import Article from "./components/article/Article";
import TopicList from "./components/topicList/TopicList";

import CreateArticle from "./components/CreateArticle/CreateArticle";
import UserProfile from "./components/profile/UserProfile";

class App extends Component {
  state = {
    username: "",
    loggedIn: false,
    validUsername: false
  };
  render() {
    return (
      <div className='App'>
        <Title data-cy='title' />
        {!this.state.loggedIn ? (
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
          </span>
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
      console.log(res);
      if (res.includes(this.state.username)) {
        this.setState({ validUsername: true });
      }
    });
    this.setState({ loggedIn: true });
    this.saveUserName();
  };
  saveUserName = () => {
    localStorage.setItem(this.state.username, JSON.stringify(this.state));
  };
}

export default App;
