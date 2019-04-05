import React from "react";
import { Link } from "@reach/router";

const UserComments = ({ comments, user }) => {
  return (
    <div>
      {comments.length === 0 ? (
        <p>There are no comments yet</p>
      ) : (
        comments.map(comment => {
          return (
            <div key='comment'>
              <li key={comment.comment_id}>
                <div className='comment'>
                  <Link to={`/articles/${comment.article_id}`}>
                    <p id='commentAuthor'>{comment.author}</p>
                    <p id='commentBody'>{comment.body}</p>
                  </Link>
                </div>
              </li>
            </div>
          );
        })
      )}
    </div>
  );
};

export default UserComments;
