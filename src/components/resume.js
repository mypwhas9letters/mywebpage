import React from 'react'

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
    console.log(this.state);
  }


  render() {
    return(
      <div style={{backgroundColor: "black"}}>
        <div className="ui container">
          <div className="ui text inverted menu">
            <a className="item" name="HTML" onClick={this.onClick}>
              HTML
            </a>
            <a className="item" name="PDF" onClick={this.onClick}>
              PDF
            </a>
            <a className="item" name="Regular" onClick={this.onClick}>
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
