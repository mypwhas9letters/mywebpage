import React from 'react'
import { NavLink } from 'react-router-dom'


class NavBar extends React.Component{

  render() {
    return(
      <div className="ui huge fixed inverted menu navHeight">
        <div className="ui container">
          <NavLink className="item" to="/">Hui Jake Wang</NavLink>
          <div className="right menu">
            <NavLink className="item" to="/profile">Profile</NavLink>
            <NavLink className="item" to="/projects">Projects</NavLink>
            <NavLink className="item" to="/resume">Resume</NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar
