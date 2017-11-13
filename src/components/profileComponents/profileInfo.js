import React from 'react'

const ProfileInfo = () => {
  return(
    <div className="ui card">
      <div className="image">
        <img src="https://i.pinimg.com/736x/4d/31/91/4d31913b7459a096e6b591b7e3e95304--cute-husky-puppies-husky-puppys.jpg" alt=""/>
      </div>
      <div className="content">
        <a className="header">Hui Jake Wang</a>
        <div className="meta">
          <span className="date">Joined in 2013</span>
        </div>
        <div className="description">
          Software Engineer living in New York.
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

export default ProfileInfo
