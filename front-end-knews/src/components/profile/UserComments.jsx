import React from "react";

const UserComments = ({ comments }) => {
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
                  <p id='commentAuthor'>{comment.author}</p>
                  <p id='commentBody'>{comment.body}</p>
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
