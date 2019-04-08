import React, { Component } from "react";
import { fetchTopics, postArticle, deleteTopicReq } from "../../api";
import { navigate } from "@reach/router";
import CreateNewTopic from "./CreateNewTopic";
class CreateArticle extends Component {
  state = {
    availableTopics: [],
    newArticle: {
      title: "",
      body: "",
      votes: 0,
      topic: "",
      author: ""
    },
    readyToSubmit: false,
    createNewTopic: false
  };
  render() {
    return (
      <form htmlFor='articleCreation' id='articleForm'>
        <label htmlFor='title'>
          Title:
          <input
            data-cy='createTitle'
            className='inputBox'
            type='text'
            name='title'
            id='createTitle'
            onChange={this.inputChanged}
          />
          <br />
        </label>
        <div id='selectTopic'>
          Topic:
          <select
            className='selectBox'
            data-cy='topicSelector'
            name='topic'
            id='topic'
            onChange={this.inputChanged}
          >
            <option id='defaultTopic' value='' disabled selected>
              Select a Topic
            </option>
            {this.state.availableTopics.map(topic => {
              return (
                <option key={topic.slug} value={topic.slug}>
                  {topic.slug}
                </option>
              );
            })}
          </select>
        </div>
        <br />

        {this.state.createNewTopic ? (
          <CreateNewTopic
            updateTopics={this.updateTopics}
            topicCreated={this.toggleTopicFalse}
          />
        ) : (
          <label id='newTopicLabel'>
            Need a different topic?
            <button
              data-cy='createNewTopic'
              className='button'
              id='createTopicButton'
              onClick={this.toggleTopicTrue}
            >
              Create New Topic
            </button>
          </label>
        )}
        <br />
        <label htmlFor='body' id='articleBody'>
          Article:
          <textarea
            className='textArea'
            rows='4'
            cols='40'
            onChange={this.inputChanged}
            name='body'
          />
        </label>
        <br />
        {this.state.newArticle.title &&
        this.state.newArticle.body &&
        this.state.newArticle.topic ? (
          <button className='button' onClick={this.postNewArticle}>
            Submit Your Article
          </button>
        ) : (
          <p id='fillInFields'>Please fill in all Fields</p>
        )}
        {/* <button onClick={this.buttonDelete}>delete topic</button> */}
      </form>
    );
  }
  componentDidMount() {
    fetchTopics().then(res => {
      this.setState({ availableTopics: res });
    });
    this.setState(prevState => {
      return {
        newArticle: { ...prevState.newArticle, author: this.props.user }
      };
    });
  }
  inputChanged = e => {
    const inputArea = e.target.name;
    const value = e.target.value;

    this.setState(prevState => {
      return {
        newArticle: { ...prevState.newArticle, [inputArea]: value }
      };
    });
  };
  postNewArticle = e => {
    e.preventDefault();

    const newArticle = this.state.newArticle;

    postArticle(newArticle).then(article => {
      navigate(`/articles/${article.article_id}`);
    });
  };
  toggleTopicTrue = () => {
    this.setState({ createNewTopic: true });
  };
  toggleTopicFalse = () => {
    this.setState({ createNewTopic: false });
  };
  updateTopics = topic => {
    this.setState(prevState => {
      return { availableTopics: [...prevState.availableTopics, topic] };
    });
  };
  buttonDelete = e => {
    deleteTopicReq(test).then(res => console.log(res));
  };
}

export default CreateArticle;
