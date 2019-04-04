import React, { Component } from "react";
import { fetchCommentsByArticleId } from "../../axios";
import CommentBox from "./CommentBox";
class ArticleComments extends Component {
  state = {
    comments: [],
    addComment: false
  };
  render() {
    const comments = this.state.comments;
    return (
      <div>
        <ul className='comments'>
          {comments.length === 0 ? (
            <p>There are no comments yet</p>
          ) : (
            comments.map(comment => {
              return (
                <li key={comment.comment_id}>
                  <div className='comment'>
                    <p id='commentAuthor'>{comment.author}</p>
                    <p id='commentBody'>{comment.body}</p>
                    <p id='commentVotes'>{comment.votes}</p>
                  </div>
                </li>
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
    console.log(newComment);
    this.setState(prevState => {
      return { comments: [...prevState.comments, newComment] };
    });
  };
  addNewComment = e => {
    this.setState({ addComment: true });
  };
}

export default ArticleComments;
