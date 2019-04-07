import React, { Component } from "react";
import { createNewTopic } from "../../axios";
class CreateNewTopic extends Component {
  state = {
    slug: "",
    description: ""
  };
  render() {
    return (
      <div>
        Topic name:
        <input onChange={this.newTopicName} name='slug' type='text' />
        Topic description:
        <textarea onChange={this.newTopicName} name='description' />
        <button className='button' onClick={this.addNewTopic} type='submit'>
          Add Topic
        </button>
      </div>
    );
  }
  newTopicName = e => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };
  addNewTopic = event => {
    event.preventDefault();
    createNewTopic(this.state).then(res => {
      console.log(res);
      this.props.updateTopics(res);
      this.props.topicCreated();
    });
  };
}

export default CreateNewTopic;
