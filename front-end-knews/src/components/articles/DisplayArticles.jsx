import React from "react";
import { Link } from "@reach/router";

const DisplayArticles = ({ articles }) => {
  return (
    <div>
      {articles.length === 0 ? (
        <p>You have no articles</p>
      ) : (
        <ul className='articleList' data-cy='articlesList'>
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
      )}
    </div>
  );
};

export default DisplayArticles;
