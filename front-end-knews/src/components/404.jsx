import React from "react";
import { navigate } from "@reach/router";
const PageNotFound = () => {
  return (
    <div>
      <p className='errMsg'>Page not Found</p>
      <button className='button' onClick={linkToHomePage}>
        Back To Home Page
      </button>
    </div>
  );
};

export default PageNotFound;

const linkToHomePage = () => {
  navigate("/");
};
