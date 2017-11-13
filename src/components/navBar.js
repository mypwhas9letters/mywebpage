import React from 'react'
import { NavLink } from 'react-router-dom'


class NavBar extends React.Component{

  render() {
    return(
      <div className="ui huge fixed inverted borderless menu">
        <div className="ui container">
          <NavLink className="item" to="/">Home</NavLink>
          <NavLink className="item" to="/profile">Profile</NavLink>
          <NavLink className="item" to="/resume">Resume</NavLink>
          <NavLink className="item" to="/Projects">Projects</NavLink>
        </div>
      </div>
    )
  }
}

export default NavBar
