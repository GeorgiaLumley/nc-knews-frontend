import React, { Component } from "react";

import {
  fetchCommentsByArticleId,
  updateCommentVote,
  deleteCommentRequest
} from "../../api";
import CommentBox from "./CommentBox";
import DeleteCommentButton from "./DeleteCommentButton";
class ArticleComments extends Component {
  state = {
    comments: [],
    addComment: false,
    voteChange: 0
  };
  render() {
    const { comments, voteChange, addComment } = this.state;
    return (
      <div className='comments'>
        <ul id='commentList'>
          {comments.length === 0 ? (
            <p>There are no comments yet</p>
          ) : (
            <div>
              <h3>Comments</h3>
              {comments.map(comment => {
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
                          <p id='commentAuthor'>Author: {comment.author}</p>
                          <p id='commentBody'>{comment.body}</p>
                        </div>
                      </li>
                    </div>
                    <div id='commentVotes'>
                      <p>Votes: {comment.votes + voteChange}</p>
                      <span role='img'>
                        <button
                          className='button'
                          disabled={voteChange === 1}
                          onClick={() => this.updateVote(1, comment.comment_id)}
                        >
                          Up
                        </button>
                        <button
                          className='button'
                          disabled={voteChange === -1}
                          onClick={() =>
                            this.updateVote(-1, comment.comment_id)
                          }
                        >
                          Down
                        </button>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </ul>
        {addComment ? (
          <CommentBox
            user={this.props.user}
            article_id={this.props.article_id}
            updateComments={this.updateComments}
          />
        ) : (
          <> </>
        )}
        {this.props.user ? (
          <button className='button' onClick={this.addNewComment}>
            Add Comment
          </button>
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
  updateVote = (value, comment_id) => {
    updateCommentVote(value, comment_id);
    this.setState(prevState => {
      return { voteChange: prevState.voteChange + value };
    });
  };
  deleteComment = comment_id => {
    const oldComments = this.state.comments;
    const newComments = oldComments.filter(comment => {
      return comment.comment_id !== comment_id;
    });

    deleteCommentRequest(comment_id).then(
      this.setState({ comments: newComments })
    );
  };
}

export default ArticleComments;
