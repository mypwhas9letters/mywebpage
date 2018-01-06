import React from 'react';

import MyResume from './resume/myResume';

class Resume extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      type: "HTML"
    }
  }

  onClick = (event) => {
    event.preventDefault()
    this.setState({type: event.target.name})
  }

  render() {
    let resumeView = this.state.type === "HTML" ? <img src={require("../images/resume.jpg")} className="resume" alt=""/> : <MyResume />
    return(
      <div className="resumePage">
        <div className="ui container">
          <div className="ui text inverted menu">
            <a className="item" name="HTML" onClick={this.onClick}>HTML</a>
            <a className="item" name="PDF" onClick={this.onClick}>PDF</a>
          </div>
          {resumeView}
        </div>
      </div>
    )
  }

}

export default Resume;
