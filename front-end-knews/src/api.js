import axios from "axios";
const baseUrl = "https://nc-knews-lumley.herokuapp.com/api";
export const fetchAllArticles = async blank => {
  const { data } = await axios.get(`${baseUrl}/articles`).catch(err => {
    console.log(err);
  });
  return data.articles;
};

export const fetchArticlesWithTopic = async slug => {
  const { data } = await axios
    .get(`${baseUrl}/articles/topic?topic=${slug}`)
    .catch(err => {
      throw "invalid slug";
    });
  return data.articles;
};

export const fetchArticleById = async article_id => {
  const { data } = await axios
    .get(`${baseUrl}/articles/${article_id}`)
    .catch(err => {
      throw "invalid article_id";
    });

  return data.article;
};

export const fetchCommentsByArticleId = async article_id => {
  const { data } = await axios
    .get(`${baseUrl}/articles/${article_id}/comments`)
    .catch(err => console.log(err));
  return data.comments;
};

export const updateArticleVote = async (vote, article_id) => {
  const { data } = await axios
    .patch(`${baseUrl}/articles/${article_id}`, {
      incVotes: vote
    })
    .catch(err => console.log(err));

  return data.updateVotes;
};
export const updateCommentVote = async (vote, comment_id) => {
  const { data } = await axios
    .patch(`${baseUrl}/comments/${comment_id}`, {
      incVotes: vote
    })
    .catch(err => console.log(err));

  return data.updateVotes;
};

export const fetchTopics = async blank => {
  const { data } = await axios
    .get(`${baseUrl}/topics`)
    .catch(err => console.log(err));
  return data.topics;
};

export const postArticle = async newArticle => {
  console.log(newArticle);
  const { data } = await axios
    .post(`${baseUrl}/articles`, newArticle)
    .catch(err => {
      console.log(err);
    });
  return data.article[0];
};

export const addNewComment = async (article_id, comment) => {
  console.log("api", article_id, comment);
  const { data } = await axios
    .post(`${baseUrl}/articles/${article_id}/comments`, comment)
    .catch(err => {
      console.log(err);
    });
  console.log("api last", data);
  if (data.comment) return data.comment[0];
  else {
    throw {
      msg: data.msg
    };
  }
};

export const fetchFilteredArticle = async (order, sortBy) => {
  console.log(order, sortBy);
  const { data } = await axios
    .get(`${baseUrl}/articles?order=${order}&&sort_by=${sortBy}`)
    .catch(err => {
      console.log(err);
    });
  return data;
};

export const fetchFilteredArticleWithTopic = async (order, sortBy, topic) => {
  const { data } = await axios
    .get(
      `${baseUrl}/articles/topic?topic=${topic}&&order=${order}&&sort_by=${sortBy}`
    )

    .catch(err => {
      console.log(err);
    });
  console.log(data.articles);
  return data.articles;
};

export const fetchArticlesByAuthor = async author => {
  const { data } = await axios
    .get(`${baseUrl}/articles?author=${author}`)
    .catch(err => err.response);
  console.log(data);
  if (data.filtered) return data.filtered;
  else {
    throw {
      msg: data.msg
    };
  }
};

export const fetchCommentsByAuthor = async author => {
  const { data } = await axios
    .get(`${baseUrl}/comments?author=${author}`)
    .catch(err => {
      console.log(err);
    });
  return data.comments;
};

export const deleteArticleRequest = async article_id => {
  const { data } = await axios
    .delete(`${baseUrl}/articles/${article_id}`)
    .catch(err => console.log(err));
  return data;
};

export const deleteCommentRequest = async comment_id => {
  const { data } = await axios
    .delete(`${baseUrl}/comments/${comment_id}`)
    .catch(err => console.log(err));
  return data;
};

export const createNewTopic = async topic => {
  const { data } = await axios
    .post(`${baseUrl}/topics`, topic)
    .catch(err => console.log(err));

  return data.topic;
};

export const fetchAllUsers = async blank => {
  const { data } = await axios
    .get(`${baseUrl}/users`)
    .catch(err => console.log(err));
  return data.users;
};

export const deleteTopicReq = async topic => {
  const { data } = await axios
    .get(`${baseUrl}/topics/${topic}`)
    .catch(err => console.log(err));
  return data;
};
