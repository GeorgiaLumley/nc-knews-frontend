import React from "react";

const Login = ({ usernameChange }) => {
  return (
    <div>
      <label for='usernameInput'>
        Username
        <input
          className='inputBox'
          id='username'
          onChange={this.usernameChange}
          type='text'
        />
      </label>
    </div>
  );
};

export default Login;
