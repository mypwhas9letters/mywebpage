import React from 'react'
import { NavLink } from 'react-router-dom'


class NavBar extends React.Component{

  render() {
    return(
      <div className="ui huge inverted menu navHeight">
        <div className="ui container">
          <NavLink className="item" to="/">Home</NavLink>
          <div className="right menu">
            <NavLink className="item" to="/profile">Profile</NavLink>
            <NavLink className="item" to="/resume">Resume</NavLink>
            <NavLink className="item" to="/projects">Projects</NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar
