import React from 'react';

import MyResume from './resume/myResume';
import HTMLResume from './resume/HTMLResume';

class Resume extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      type: "resume"
    }
  }

  onClick = (event) => {
    event.preventDefault()
    this.setState({type: event.target.name})
  }

  render() {
    let resumeView = this.state.type === "html" ? <HTMLResume /> : <MyResume />
    return(
      <div className="resumePage">
        <div className="ui container">
          <br/>
          <div className="ui text inverted menu">
            <a className="item" name="resume" onClick={this.onClick}>Resume</a>
            <a className="item" name="html" onClick={this.onClick}>HTML</a>
            <a className="item" name="pdf" onClick={this.onClick}>PDF</a>
          </div>
          {resumeView}
        </div>
      </div>
    )
  }

}

export default Resume;
