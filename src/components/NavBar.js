import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const NavBar = props => {
  if (false && props.location.pathname !== '/') {
    setTimeout(() => {
      props.history.push('/');
    }, 2000);
  }
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <NavLink to="/" className="brand-logo">
          Poke'Times
        </NavLink>
        <ul className="right">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(NavBar);
