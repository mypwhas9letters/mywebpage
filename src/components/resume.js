import React from 'react'

class Resume extends React.Component{

  render() {

    return(
      <div style={{backgroundColor: "black"}}>
        <img src={require("../images/resume.jpg")} className="res" alt=""/>
      </div>
    )
  }

}

export default Resume
