import React from 'react';

const ProfileInfo = () => {
  return(
    <div className="ui stackable cards">
      <div className="ui card">
        <div className="image">
          <img src={require("../../images/profile.jpg")} alt=""/>
        </div>
        <div className="content">
          <a className="header">Jake Hui Wang</a>
          <div className="meta">
            <span className="date">Full Stack Software Engineer</span>
          </div>
        </div>
        <div className="content">
          <div className="description">
            Full stack web developer with a passion for building applications that make our lives easier.
            Not too long ago, I remember constantly saying "I wish there is an app for that". Now I can say "Which technology I should use to build it." Coding has given me the ability to create anything I want.
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;
