import React from "react";
import { Link } from "@reach/router";

const DisplayArticles = ({ articles }) => {
  return (
    <ul className='articleList'>
      {articles.map(article => {
        return (
          <li className='articleItem' key={article.article_id}>
            <Link to={`/articles/${article.article_id}`}>
              <h3 id='articleTitle'>{article.title}</h3>
            </Link>
            <p id='articleAuthor'>Author: {article.author}</p>
            <p id='articleTopic'>Topic: {article.topic}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default DisplayArticles;
