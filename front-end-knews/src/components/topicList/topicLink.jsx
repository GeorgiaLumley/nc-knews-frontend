import React from "react";
import { Link } from "@reach/router";
const TopicLink = () => {
  return (
    <Link to={"/topics"}>
      <h4>Topics</h4>
    </Link>
  );
};

export default TopicLink;
