import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="ui inverted vertical footer segment">
      <div className="ui container">
        <div className="ui horizontal inverted small divided link list">
          <NavLink className="item" to="/">Home</NavLink>
          <NavLink className="item" to="/profile">Profile</NavLink>
          <NavLink className="item" to="/projects">Projects</NavLink>
          <NavLink className="item" to="/resume">Resume</NavLink>
        </div>
        <p>Many cups of coffee were consumed in the production of these projects.</p>
      </div>
    </div>
  );
}

export default Footer;
