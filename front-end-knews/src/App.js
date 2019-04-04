import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Title from "./components/title";
import Articles from "./components/articles/Articles";
import Article from "./components/article/Article";
import TopicList from "./components/topicList/TopicList";

import CreateArticle from "./components/CreateArticle/CreateArticle";

class App extends Component {
  state = {
    username: "",
    loggedIn: false
  };
  render() {
    return (
      <div className='App'>
        <Title />
        {!this.state.loggedIn ? (
          <label>
            Username
            <input onChange={this.usernameChange} type='text' />
            <button type='submit' value='logIn' onClick={this.LoggedIn}>
              Login
            </button>
          </label>
        ) : (
          <p>{`logged in as ${this.state.username}`}</p>
        )}
        <Router className='app-main-route'>
          <TopicList path='/topics' />
          <Articles path='/' user={this.state.username} />
          <Articles
            path='/articles/topic/:topic_id'
            user={this.state.username}
          />
          <Article path='/articles/:article_id' user={this.state.username} />
          <CreateArticle
            path='/article/createArticle'
            user={this.state.username}
          />
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
    this.setState({ loggedIn: true });
  };
}

export default App;
