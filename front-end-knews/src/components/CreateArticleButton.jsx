import React from "react";
import { Link } from "@reach/router";
const CreateArticleButton = () => {
  return (
    <div id="createArticleButton">
      <Link to='/article/createArticle'>
        <label htmlFor='createArticle'>
          <button className='button' type='submit' name='createArticle' id="createArticleButton">
            Create Article
          </button>
        </label>
      </Link>
    </div>
  );
};

export default CreateArticleButton;
