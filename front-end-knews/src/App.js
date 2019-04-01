import React, { Component } from "react";

import "./App.css";
import Title from "./components/title";
import TopicList from "./components/topicList/TopicList";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Title />
        <TopicList />
      </div>
    );
  }
}

export default App;
