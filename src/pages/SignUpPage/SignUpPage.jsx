import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PageLayout } from '../pages';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../../assets/HouseCheckup.svg?react';
import './_signUpPage.scss';

function SignUpPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName && lastName && email && username && password) {
    dispatch({
      type: 'REGISTER',
      payload: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        password: password
      }
    })
  }
  };

  return (
    <PageLayout>
      <div className="signUp-container">
        <div className="row jc-center">
          <Logo />
        </div>
        <form className="signUp-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="column">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="text-m"
                required
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </div>
            <div className="column">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="text-m"
                required
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>
          </div>
          <div className="column">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="text-m"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="column">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="text-m"
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
              className="text-m"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="row jc-center">
            <button type="submit" className="btn btn-primary">Register</button>
          </div>
        </form>
        <div className="row jc-center">
          <p className="text-s">Have an account?&nbsp;&nbsp;</p>
          <button
            type="button"
            className="btn btn_asLink text-s"
            onClick={() => {
              history.push('/login');
            }}
          >
            Login
          </button>
        </div>
      </div>
    </PageLayout>
  );
}

export default SignUpPage;
