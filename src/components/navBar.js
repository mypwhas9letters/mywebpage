import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return(
    <div className="ui inverted segment navBar">
      <div className="ui container inverted secondary pointing menu">
        <NavLink className="item" to="/"><h1 className="fontLemon">Jake Hui Wang</h1></NavLink>
        <div className="right menu mobile-hide">
          <NavLink className="item" to="/profile"><h3>Profile</h3></NavLink>
          <NavLink className="item" to="/projects"><h3>Projects</h3></NavLink>
          <NavLink className="item" to="/resume"><h3>Resume</h3></NavLink>
        </div>

        <div class="ui right simple dropdown item large-hide">
            Menu <i class="dropdown icon"></i>
            <div class=" menu">
              <NavLink className="item" to="/profile"><h3>Profile</h3></NavLink>
              <NavLink className="item" to="/projects"><h3>Projects</h3></NavLink>
              <NavLink className="item" to="/resume"><h3>Resume</h3></NavLink>
            </div>
          </div>

      </div>
    </div>
  )
}

export default NavBar;

// <NavLink className="item" to="/activities"><h3>Activities</h3></NavLink>
