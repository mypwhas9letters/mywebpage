import React from 'react'
import Contact from './profileComponents/contact'
import Content from './profileComponents/content'
import AboutMe from './profileComponents/aboutMe'
import ProfileInfo from './profileComponents/profileInfo'


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
          <div className="four wide  column">
            <Contact />
            <Contact />
            <Contact />
          </div>
        </div>
    )
  }

}

export default Profile
