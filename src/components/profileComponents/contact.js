import React from 'react'

const Contact = () => {
  return(
    <div className="ui card">
      <div className="content">
        <div className="header">Contact Me</div>
      </div>
      <div className="content">
        <button class="ui linkedin button">
          <i class="linkedin icon"></i>
          <a href="https://www.linkedin.com/in/hui-wang-81a9a67a/"><span style={{color: 'white'}}>LinkedIn</span></a>
        </button>
      </div>
      <div className="content">
        <button class="ui black button">
          <i class="github icon"></i>
          <a href="https://github.com/mypwhas9letters"><span style={{color: 'white'}}>GitHub</span></a>
        </button>
      </div>
      <div className="content">
        Email: huiwang339@gmail.com
      </div>
    </div>
  )
}

export default Contact
