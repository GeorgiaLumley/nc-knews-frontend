import React from "react";
import { Link } from "@reach/router";
const CreateArticleButton = () => {
  return (
    <Link to='/article/createArticle'>
      <label htmlFor='createArticle'>
        <button type='submit' name='createArticle'>
          Create Article
        </button>
      </label>
    </Link>
  );
};

export default CreateArticleButton;
