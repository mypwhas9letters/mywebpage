import React from 'react'

const ProfileInfo = () => {
  return(
    <div className="ui stackable cards">
      <div className="ui card">
        <div className="image">
          <img src={require("../../images/profile.jpg")} alt=""/>
        </div>
        <div className="content">
          <a className="header">Hui Jake Wang</a>
          <div className="meta">
            <span className="date">Software Engineer</span>
          </div>
        </div>
        <div className="content">
          <div className="description">
            Something interesting about me or a quote
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProfileInfo
