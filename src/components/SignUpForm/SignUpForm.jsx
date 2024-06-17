import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './_signUpForm.scss';

function SignUpForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <form className="signUp-form column" onSubmit={registerUser}>
      <div className="header-two jc-center">Sign Up</div>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div className="column">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="row text-m"
          value={username}
          required
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className="column">
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="row text-m"
          value={password}
          required
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="row jc-center">
        <input
          className="btn-pill text-s"
          type="submit"
          name="submit"
          value="Register"
        />
      </div>
    </form>
  );
}

export default SignUpForm;
