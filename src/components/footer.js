import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className="ui inverted vertical footer segment">
        <div className="ui center aligned container">
          <div className="ui horizontal inverted small divided link list">
            <p>This page was created by Hui Wang. Many cups of coffee were consumed in the production of this webpage.</p>
            <NavLink className="item" to="/">Home</NavLink>
            <NavLink className="item" to="/">Profile</NavLink>
            <NavLink className="item" to="/projects">Projects</NavLink>
            <NavLink className="item" to="/resume">Resume</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
