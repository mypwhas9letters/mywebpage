import React from 'react'
import Contact from './profileComponents/contact'
import Content from './profileComponents/content'
import AboutMe from './profileComponents/aboutMe'
import Skills from './profileComponents/skills'
import ProfileInfo from './profileComponents/profileInfo'
import Photos from './profileComponents/photos'

class Profile extends React.Component{

  render() {
    return(
      <div className="ui stackable grid container">
        <div className="four wide left floated column">
          <ProfileInfo />
          <AboutMe />
        </div>
        <div className="eight wide column">
          <Content />
        </div>
        <div className="four wide center aligned column">
          <Contact />
          <Skills />
        </div>
      </div>
    )
  }

}

export default Profile
