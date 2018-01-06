import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return(
    <div className="ui inverted segment navBar">
      <div className="ui container inverted secondary pointing menu">
        <NavLink className="fitted item" to="/"><h1 className="fontLemon">Jake Hui Wang</h1></NavLink>
        <div className="right menu">
          <NavLink className="item" to="/profile"><h3>Profile</h3></NavLink>
          <NavLink className="item" to="/projects"><h3>Projects</h3></NavLink>
          <NavLink className="item" to="/resume"><h3>Resume</h3></NavLink>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
