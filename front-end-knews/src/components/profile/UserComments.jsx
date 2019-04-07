import React from "react";
import { Link } from "@reach/router";

const UserComments = ({ comments, user }) => {
  return (
    <div>
      {comments.length === 0 ? (
        <p>There are no comments yet</p>
      ) : (
        <ul id='userComments'>
          {comments.map(comment => {
            return (
              <div>
                <li key={comment.comment_id} id='userCommentItem'>
                  <div>
                    <Link to={`/articles/${comment.article_id}`}>
                      <p id='commentAuthor'>{comment.author}</p>
                      <p id='commentBody'>{comment.body}</p>
                    </Link>
                  </div>
                </li>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default UserComments;
