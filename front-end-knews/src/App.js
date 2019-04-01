import React, { Component } from "react";

import "./App.css";
import Title from "./components/title";
import TopicList from "./components/topicList/TopicList";
import Articles from "./components/articles/Articles";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Title />
        <TopicList />
        <Articles />
      </div>
    );
  }
}

export default App;
