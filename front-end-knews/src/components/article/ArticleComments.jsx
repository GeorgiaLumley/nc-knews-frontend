import React, { Component } from "react";

import {
  fetchCommentsByArticleId,
  updateArticleVote,
  deleteCommentRequest
} from "../../axios";
import CommentBox from "./CommentBox";
import DeleteCommentButton from "./DeleteCommentButton";
class ArticleComments extends Component {
  state = {
    comments: [],
    addComment: false,
    voteChange: 0
  };
  render() {
    const comments = this.state.comments;
    return (
      <div className='comments'>
        <ul id='commentList'>
          {comments.length === 0 ? (
            <p>There are no comments yet</p>
          ) : (
            comments.map(comment => {
              return (
                <div>
                  <div>
                    <li key={comment.comment_id}>
                      <div className='comment'>
                        {comment.author === this.props.user ? (
                          <DeleteCommentButton
                            deleteComment={this.deleteComment}
                            comment_id={comment.comment_id}
                          />
                        ) : (
                          <></>
                        )}
                        <p id='commentAuthor'>{comment.author}</p>
                        <p id='commentBody'>{comment.body}</p>
                      </div>
                    </li>
                  </div>
                  <div id='commentVotes'>
                    <p>{comment.votes + this.state.voteChange}</p>
                    <span role='img'>
                      <button
                        className='button'
                        disabled={this.state.voteChange === 1}
                        onClick={() => this.updateVote(1)}
                      >
                        Up
                      </button>
                      <button
                        className='button'
                        disabled={this.state.voteChange === -1}
                        onClick={() => this.updateVote(-1)}
                      >
                        Down
                      </button>
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </ul>

        <button className='button' onClick={this.addNewComment}>
          Add Comment
        </button>
        {this.state.addComment ? (
          <CommentBox
            user={this.props.user}
            article_id={this.props.article_id}
            updateComments={this.updateComments}
          />
        ) : (
          <> </>
        )}
      </div>
    );
  }
  componentDidMount() {
    fetchCommentsByArticleId(this.props.article_id).then(comments => {
      this.setState({ comments });
    });
  }
  updateComments = newComment => {
    this.setState(prevState => {
      return { comments: [...prevState.comments, newComment] };
    });
  };
  addNewComment = e => {
    this.setState({ addComment: true });
  };
  updateVote = value => {
    updateArticleVote(value, this.props.article_id);
    this.setState(prevState => {
      return { voteChange: prevState.voteChange + value };
    });
  };
  deleteComment = comment_id => {
    console.log("in the delete");
    const oldComments = this.state.comments;
    const newComments = oldComments.filter(comment => {
      return comment.comment_id !== comment_id;
    });
    console.log(oldComments.length, newComments.length);
    deleteCommentRequest(comment_id).then(
      this.setState({ comments: newComments })
    );
  };
}

export default ArticleComments;
