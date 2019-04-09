import React from "react";
import { Link } from "@reach/router";
import { navigate } from "@reach/router";

const Title = () => {
  return (
    <button onClick={homeLink}>
      <h1 id='mainTitle'> NorthCoders News</h1>
    </button>
  );
};

export default Title;

const homeLink = () => {
  navigate("/");
};
