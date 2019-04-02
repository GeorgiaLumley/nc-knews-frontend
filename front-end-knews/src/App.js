import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";

import Title from "./components/title";

import Articles from "./components/articles/Articles";
import Article from "./components/article/Article";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Title />

        <Router className='app-main-route'>
          <Articles path='/' />
          <Article path='/articles/:article_id' />
        </Router>
      </div>
    );
  }
}

export default App;
