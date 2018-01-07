import React from 'react'

const AboutMe = () => {
  return(
    <div className="ui stackable cards">
      <div className="ui card">

        <div className="content">
          <h3>About Me</h3>
        </div>

        <div className="content">
          <div className="description">
            <p>Education:</p>
            Flatiron School - Full Stack Web Development<br/>
            Stony Brook University - Health Science
          </div>
        </div>

        <div className="content">
          <div className="description">
            <p>Hobbies:</p>
            Guitar
        </div>

        </div>

      </div>
    </div>
  )
}

export default AboutMe
