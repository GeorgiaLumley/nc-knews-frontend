import React from "react";

const Login = ({ usernameChange }) => {
  return (
    <div>
      <label for='usernameInput'>
        Username
        <input onChange={this.usernameChange} type='text' />
      </label>
    </div>
  );
};

export default Login;
