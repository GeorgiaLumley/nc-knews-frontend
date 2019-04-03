import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Title from "./components/title";
import Articles from "./components/articles/Articles";
import Article from "./components/article/Article";

import TopicList from "./components/topicList/TopicList";

import CreateArticle from "./components/CreateArticle/CreateArticle";
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Title />
        <Router className='app-main-route'>
          <TopicList path='/topics' />
          <Articles path='/' />
          <Articles path='/articles/topic/:topic_id' />
          <Article path='/articles/:article_id' />
          <CreateArticle path='/article/createArticle' />
        </Router>
      </div>
    );
  }
}

export default App;
