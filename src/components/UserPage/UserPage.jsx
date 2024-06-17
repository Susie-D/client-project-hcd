import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function UserPage() {
  const user = useSelector(store => store.user);

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <NavLink className="navLink" to="/info">
        Tutorial & Helpful Links
      </NavLink>
      <br />
      <NavLink className="navLink" to="/info">
        Add Devices/Items
      </NavLink>
      <br />
      <NavLink className="navLink" to="/info">
        Items Reports
      </NavLink>
    </div>
  );
}

export default UserPage;
