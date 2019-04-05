import React, { Component } from "react";
import { navigate } from "@reach/router";
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
                        disabled={this.state.voteChange === 1}
                        onClick={() => this.updateVote(1)}
                      >
                        Up
                      </button>
                      <button
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

        <button onClick={this.addNewComment}>Add Comment</button>
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
  deleteComment = e => {
    deleteCommentRequest(e.target.name).then(res =>
      navigate(`/articles/${this.props.article_id}`)
    );
  };
}

export default ArticleComments;
