import React from 'react';
import Contact from './profileComponents/contact';
import AboutMe from './profileComponents/aboutMe';
import Skills from './profileComponents/skills';
import ProfileInfo from './profileComponents/profileInfo';

const Profile = () => {
  return(
    <div className="ui stackable grid container">
      <div className="eight wide left floated column profileMargin">
        <ProfileInfo />
        <Contact />
        <Skills />
        <AboutMe />
      </div>
    </div>
  );
}

export default Profile;
