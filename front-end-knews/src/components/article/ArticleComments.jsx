import * as React from "react";

export const ArticleComments = ({ comments }) => {
  return (
    <ul className='comments'>
      {comments.map(comment => {
        return (
          <li key={comment.comment_id}>
            <div className='comment'>
              <p id='commentAuthor'>{comment.author}</p>
              <p id='commentBody'>{comment.body}</p>
              <p id='commentVotes'>{comment.votes}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
