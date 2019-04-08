import React from "react";

const DeleteButton = ({ deleteArticle }) => {
  return (
    <div>
      <button
        className='button'
        type='submit'
        id='deleteArticleButton'
        onClick={deleteArticle}
      >
        Delete Your Article
      </button>
    </div>
  );
};

export default DeleteButton;
