import React from 'react'

const Contact = () => {
  return(
    <div className="ui stackable cards">
      <div className="ui card">
        <div className="content">
          <div className="header">Links</div>
        </div>
        <div className="content">
          <div className="fluid ui vertical buttons">
            <button className="ui google plus button">
              <i className="google icon"></i>
              <div><span style={{color: 'white'}}>huiwang339@gmail.com</span></div>
            </button>
            <button className="ui black button">
              <i className="github icon"></i>
              <a href="https://github.com/mypwhas9letters"><span style={{color: 'white'}}>GitHub</span></a>
            </button>
            <button className="ui linkedin button">
              <i className="linkedin icon"></i>
              <a href="https://www.linkedin.com/in/hui-wang-81a9a67a/"><span style={{color: 'white'}}>LinkedIn</span></a>
            </button>
            <button className="ui green button">
              <i className="medium icon"></i>
              <a href="https://medium.com/@huiwang339"><span style={{color: 'white'}}>Medium</span></a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
