import React from "react";

const DeleteButton = ({ deleteArticle }) => {
  return (
    <div>
      <button className='button' type='submit' onClick={deleteArticle}>
        Delete Article
      </button>
    </div>
  );
};

export default DeleteButton;
