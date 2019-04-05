import React from "react";

const DeleteCommentButton = ({ deleteComment, comment_id }) => {
  return (
    <div>
      <button type='submit' name={comment_id} onClick={deleteComment}>
        Delete Comment
      </button>
    </div>
  );
};

export default DeleteCommentButton;
