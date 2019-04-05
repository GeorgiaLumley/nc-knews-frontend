import React from "react";

const DeleteCommentButton = ({ deleteComment, comment_id }) => {
  return (
    <div>
      <button type='submit' onClick={() => deleteComment(comment_id)}>
        Delete Comment
      </button>
    </div>
  );
};

export default DeleteCommentButton;
