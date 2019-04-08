import React, { Component } from "react";
import { addNewComment } from "../../api";
class CommentBox extends Component {
  state = {
    author: null,
    body: ""
  };
  render() {
    return (
      <form>
        Comment:
        <textarea onChange={this.updateBody} />
        <button className='button' type='submit' onClick={this.postComment}>
          Post Your Comment
        </button>
      </form>
    );
  }
  componentDidMount() {
    this.setState({ author: this.props.user });
  }
  updateBody = e => {
    const text = e.target.value;
    this.setState({ body: text });
  };
  postComment = e => {
    e.preventDefault();

    const article_id = this.props.article_id;
    addNewComment(article_id, this.state).then(newComment => {
      this.props.updateComments(newComment);
    });
  };
}

export default CommentBox;
