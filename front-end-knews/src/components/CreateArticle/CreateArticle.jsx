import React, { Component } from "react";
import { fetchTopics, postArticle } from "../../axios";

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
    readyToSubmit: false
  };
  render() {
    return (
      <form>
        <label for='title'>
          Title:
          <input type='text' name='title' onChange={this.inputChanged} />
        </label>
        Topic:
        <select name='topic' id='topic' onChange={this.inputChanged}>
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
        <button>Create New Topic Placeholder</button>
        <br />
        <label for='body'>
          Article:
          <textarea
            rows='4'
            cols='40'
            onChange={this.inputChanged}
            name='body'
          />
        </label>
        {this.state.newArticle.title &&
        this.state.newArticle.body &&
        this.state.newArticle.topic ? (
          <button onClick={this.postNewArticle}>submit</button>
        ) : (
          <p>Fill in all Fields</p>
        )}
      </form>
    );
  }
  componentDidMount() {
    fetchTopics().then(res => {
      this.setState({ availableTopics: res });
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
    this.setState(prevState => {
      return {
        newArticle: { ...prevState.newArticle, author: this.props.user }
      };
    });
    const newArticle = this.state.newArticle;

    console.log(newArticle);
    postArticle(newArticle);
  };
}

export default CreateArticle;
