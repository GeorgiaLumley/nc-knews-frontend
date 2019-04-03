import axios from "axios";

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
    .patch(
      `https://nc-knews-lumley.herokuapp.com/api/articles/${article_id}`,
      vote
    )
    .catch(err => console.log(err));

  return data.updateVotes;
};
