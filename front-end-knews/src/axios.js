import axios from "axios";

export const fetchAllArticles = async blank => {
  const { data } = await axios
    .get("https://nc-knews-lumley.herokuapp.com/api/articles")
    .catch(err => {
      console.log(err);
    });
  return data.articles;
};

export const fetchArticlesWithTopic = async slug => {
  const { data } = await axios
    .get(`https://nc-knews-lumley.herokuapp.com/api/articles?topic=${slug}`)
    .catch(err => {
      console.log(err);
    });
  return data.filtered;
};

export const fetchArticleById = async article_id => {
  const { data } = await axios
    .get(`https://nc-knews-lumley.herokuapp.com/api/articles/${article_id}`)
    .catch(err => console.log(err));
  return data.article;
};

export const fetchCommentsByArticleId = async article_id => {
  const { data } = await axios
    .get(
      `https://nc-knews-lumley.herokuapp.com/api/articles/${article_id}/comments`
    )
    .catch(err => console.log(err));
  return data.comments;
};

export const updateArticleVote = async (vote, article_id) => {
  const { data } = await axios
    .patch(`https://nc-knews-lumley.herokuapp.com/api/articles/${article_id}`, {
      incVotes: vote
    })
    .catch(err => console.log(err));

  return data.updateVotes;
};

export const fetchTopics = async blank => {
  const { data } = await axios
    .get("https://nc-knews-lumley.herokuapp.com/api/topics")
    .catch(err => console.log(err));
  return data.topics;
};

export const postArticle = async newArticle => {
  const { data } = await axios
    .post("https://nc-knews-lumley.herokuapp.com/api/articles", newArticle)

    .catch(err => {
      console.log(err);
    });
  return data.article[0];
};

export const addNewComment = async (article_id, comment) => {
  console.log(comment);
  const { data } = await axios
    .post(
      `https://nc-knews-lumley.herokuapp.com/api/articles/${article_id}/comments`,
      comment
    )
    .catch(err => {
      console.log(err);
    });

  return data.comment[0];
};

export const fetchFilteredArticle = async (order, sortBy) => {
  const { data } = await axios
    .get(
      `https://nc-knews-lumley.herokuapp.com/api/articles?order=${order}&&sortBy=${sortBy}`
    )
    .catch(err => {
      console.log(err);
    });
  return data;
};

export const fetchFilteredArticleWithTopic = async (order, sortBy, topic) => {
  const { data } = await axios
    .get(
      `https://nc-knews-lumley.herokuapp.com/api/articles?order=${order}&&sortBy=${sortBy}&&topic=${topic}`
    )
    .catch(err => {
      console.log(err);
    });
  return data;
};

export const fetchArticlesByAuthor = async author => {
  const { data } = await axios
    .get(`https://nc-knews-lumley.herokuapp.com/api/articles?author=${author}`)
    .catch(err => {
      console.log(err);
    });

  return data.filtered;
};
