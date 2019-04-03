import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Title from "./components/title";
import Articles from "./components/articles/Articles";
import Article from "./components/article/Article";
import TopicLink from "./components/topicList/topicLink";
import TopicList from "./components/topicList/TopicList";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Title />
        <TopicLink />
        <Router className='app-main-route'>
          <TopicList path='/topics' />
          <Articles path='/' />
          <Articles path='/articles/topic/:topic_id' />
          <Article path='/articles/:article_id' />
        </Router>
      </div>
    );
  }
}

export default App;
