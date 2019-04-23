import React, { Component } from "react";
import { Router } from "@reach/router";
import { fetchAllUsers } from "./api";
import "./App.css";
import Title from "./components/title";
import Articles from "./components/articles/Articles";
import Article from "./components/article/Article";
import TopicList from "./components/topicList/TopicList";
import CreateArticle from "./components/CreateArticle/CreateArticle";
import UserProfile from "./components/profile/UserProfile";
import PageNotFound from "./components/404";
import CreateArticleButton from "./components/CreateArticleButton";

class App extends Component {
  state = {
    username: "",
    loggedIn: false,
    validUsername: null,
    openTopics: false
  };
  render() {
    return (
      <div className='App'>
        <Title
          data-cy='title'
          loggedIn={this.state.loggedIn}
          username={this.state.username}
          openTopics={this.openTopicsState}
          topicState={this.state.openTopics}
        />
        {!this.state.loggedIn && <p id='guest'>Guest Username: tickle122</p>}
        {!this.state.loggedIn && !this.state.openTopics ? (
          <div id='loginInput'>
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
          !this.state.openTopics && (
            <span id='loggedIn'>
              <p id='loggedInUser'>{`logged in as ${this.state.username}`}</p>

              <button
                onClick={this.LoggedOut}
                className='button'
                id='logOutButton'
              >
                Log Out
              </button>
              {this.state.loggedIn && <CreateArticleButton />}
            </span>
          )
        )}
        {this.state.validUsername && !this.state.loggedIn ? (
          <p className='errMsg'>Invalid UserName</p>
        ) : (
          <> </>
        )}
        <Router className='app-main-route'>
          <TopicList path='/topics' openTopics={this.openTopicsState} />
          <Articles
            path='/'
            user={this.state.username}
            loggedIn={this.state.loggedIn}
          />
          <Articles
            path='/articles/topic/:topic_id'
            user={this.state.username}
            loggedIn={this.state.loggedIn}
          />
          <Articles
            path='/articles/user/:author'
            user={this.state.username}
            loggedIn={this.state.loggedIn}
          />
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
  componentDidMount() {
    console.log("state");
    this.setState({ openTopics: false });
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
  openTopicsState = () => {
    console.log("hi");
    this.setState(prevState => {
      console.log(prevState.openTopics);

      return { openTopics: !prevState.openTopics };
    });
  };
}

// saveUserName = () => {
//   localStorage.setItem(this.state.username, JSON.stringify(this.state));
// };

export default App;
