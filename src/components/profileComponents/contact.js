import React from 'react'

const Contact = () => {
  return(
    <div className="ui card">
      <div className="content">
        <div className="header">Contact Me</div>
      </div>
      <div className="content">
        <h4 className="ui sub header">Links</h4>
        <div className="ui small feed">
          <div className="event">
            <div className="content">
              <div className="summary">
                 <a href="https://www.linkedin.com/in/hui-wang-81a9a67a/">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="event">
            <div className="content">
              <div className="summary">
                 <a href="https://github.com/mypwhas9letters">Github</a>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="extra content">
        <button className="ui button">Join Project</button>
      </div>
    </div>
  )
}






export default Contact
