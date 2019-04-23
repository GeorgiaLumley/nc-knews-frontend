import React, { Component } from "react";
import Topics from "./Topics";
import { fetchTopics } from "../../api";

class TopicList extends Component {
  state = {
    topics: []
  };
  render() {
    
    return (
      <div>
        <Topics topics={this.state.topics} />
      </div>
    );
  }
  componentDidMount() {
    fetchTopics().then(topics => this.setState({ topics }));
    this.props.openTopics();
  }
}

export default TopicList;
