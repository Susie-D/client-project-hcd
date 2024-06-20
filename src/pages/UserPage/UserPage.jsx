import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { PageLayout } from '../pages';
import './UserPage.scss';

function UserPage() {
  const user = useSelector(store => store.user);

  return (
    <PageLayout>
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <NavLink className="nav-link" to="/info">
        Tutorial &
        <br />
         Helpful Links
      </NavLink>
      <br />
      <NavLink className="nav-link" to="/info">
        Add 
        <br />
        Devices/Items
      </NavLink>
      <br />
      <NavLink className="nav-link" to="/devices">
        Devices 
        <br />
        List
      </NavLink>
    </div>
    </PageLayout>
  );
}

export default UserPage;