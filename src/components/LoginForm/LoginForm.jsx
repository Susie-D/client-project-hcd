import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './_loginForm.scss';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <form className="login-form column" onSubmit={login}>
      <div className="header-two jc-center">Login</div>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}      
      <div className="login-form-input column">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="row text-m"
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className="column">
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="row text-m"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="row jc-center">
        <input
          className="btn-pill text-s"
          type="submit"
          name="submit"
          value="Log In"
        />
      </div>
    </form>
  );
}

export default LoginForm;
