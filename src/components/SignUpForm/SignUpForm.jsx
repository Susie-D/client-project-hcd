import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './_signUpForm.scss';

function SignUpForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        firstName: firstName,
        lastName: lastName,
        email: email,
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
        <div className="row wrap jc-space-between">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="grid-col_5 text-m"
            value={firstName}
            required
            onChange={(event) => setFirstName(event.target.value)}
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="grid-col_5 text-m"
            value={lastName}
            required
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>

        <input
          type="text"
          name="email"
          placeholder="Email"
          className="row text-m"
          value={email}
          required
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          type="text"
          name="username"
          placeholder="Username"
          className="row text-m"
          value={username}
          required
          onChange={(event) => setUsername(event.target.value)}
        />

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
