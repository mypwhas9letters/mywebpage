import React from 'react'

const AboutMe = () => {
  return(
    <div className="ui card">
      <div className="content">
        <a className="header">Hui Jake Wang</a>
        <div className="meta">
          <span className="date">Joined in 2013</span>
        </div>
        <div className="description">
          Kristy is an art director living in New York.
        </div>
      </div>
      <div className="extra content">
        <a>
          <i className="user icon"></i>
          22 Friends
        </a>
      </div>
    </div>
  )
}

export default AboutMe
