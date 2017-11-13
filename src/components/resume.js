import React from 'react'

class Resume extends React.Component{

  render() {
    return(
      <div style={{backgroundColor: "black"}}>
        <div className="ui container">
          <div className="ui text inverted menu">
            <div className="header item">Resume Type</div>
            <a className="item">
              HTML
            </a>
            <a className="item">
              PDF
            </a>
            <a className="item">
              Regular
            </a>
          </div>

        <img src={require("../images/resume.jpg")} className="resume" alt=""/>
        </div>
      </div>
    )
  }

}

export default Resume
