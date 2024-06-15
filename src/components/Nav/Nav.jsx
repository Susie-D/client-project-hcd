import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LogOutButton } from '../components';
import './_nav.scss';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav jc-space-between">
      <Link to="/home">
        <div className="nav-title header-two">House Checkup Digital</div>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="nav-link" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="nav-link" to="/user">
              Home
            </Link>

            <Link className="nav-link" to="/info">
              Info Page
            </Link>

            <LogOutButton className="nav-link" />
          </>
        )}

        <Link className="nav-link" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
