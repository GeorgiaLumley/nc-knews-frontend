import React, { Component } from "react";
import { createNewTopic } from "../../api";
class CreateNewTopic extends Component {
  state = {
    slug: "",
    description: ""
  };
  render() {
    return (
      <div id='newTopicInfo'>
        Topic name:
        <input
          data-cy='newTopicName'
          className='inputBox'
          onChange={this.newTopicName}
          name='slug'
          type='text'
        />
        <br />
        Topic description:
        <textarea
          className='textArea'
          data-cy='newTopicDescription'
          onChange={this.newTopicName}
          name='description'
        />
        <button
          data-cy='addNewTopicButton'
          className='button'
          id='addTopicButton'
          onClick={this.addNewTopic}
          type='submit'
          disabled={!this.state.slug}
        >
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
      this.props.updateTopics(res);
      this.props.topicCreated();
    });
  };
}

export default CreateNewTopic;
