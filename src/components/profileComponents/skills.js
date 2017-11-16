import React from 'react'

const Skills = () => {
  return(
    <div className="ui stackable cards">
      <div className="ui card">
        <div className="content">
          <div className="header">Technical Skills</div>
        </div>
        <div className="ui tiny images">
          <img src={require("../../images/logos/react.png")} alt=""/>
          <img src={require("../../images/logos/redux.png")} alt=""/>
          <img src={require("../../images/logos/javascript.png")} alt=""/>
          <img src={require("../../images/logos/rails.png")} alt=""/>
          <img src={require("../../images/logos/ruby.png")} alt=""/>
          <img src={require("../../images/logos/html.png")} alt=""/>
          <img src={require("../../images/logos/css.svg")} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Skills
