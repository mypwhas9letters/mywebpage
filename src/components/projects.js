import React from 'react'

class Projects extends React.Component{

  render() {
    return(
      <div className="ui container">
        <div className="ui divided items">

          <div className="item">
            <div className="image">
              <h1 className="projectTitle">Parallel</h1>
              <img src={require("../images/projectLogos/logo.png")} alt=""/>
            </div>
            <div className="middle aligned content">
              <div className="ui top attached segment">
                <p>Description: An Airbnb for parking spaces</p>
              </div>
              <div className="ui attached segment">
                <a href="https://parallelp.herokuapp.com" target="_blank" rel="noopener noreferrer">Link to Project</a>
                <a>GitHub repo</a>
                <a>Demo</a>
              </div>
              <h4 className="ui bottom attached segment">
                <p>Technologies Used: React, Redux, Javascript, Ruby on Rails</p>
              </h4>
            </div>
          </div>


        <div className="item">
          <div className="image">
            <h1 className="projectTitle">LHFT</h1>
            <img src={require("../images/projectLogos/lets.png")} alt=""/>
          </div>
          <div className="middle aligned content">
            <div className="ui top attached segment">
              <p>Description: Social Networking Events App</p>
            </div>
            <div className="ui attached segment">
              <a href="https://lets-events.herokuapp.com/" target="_blank" rel="noopener noreferrer">Link to Project</a>
              <a>GitHub repo</a>
              <a>Demo</a>
            </div>
            <h4 className="ui bottom attached segment">
              <p>Technologies Used: React, Redux, Javascript, Ruby on Rails</p>
            </h4>
          </div>
        </div>


        <div className="item">
          <div className="image">
            <h1 className="projectTitle">Posigram</h1>
            <img src={require("../images/projectLogos/instaFam.png")} alt=""/>
          </div>
          <div className="middle aligned content">
            <div className="ui top attached segment">
              <p>Description: Photo Sharing Application Where Negative Comments Are Blocked</p>
            </div>
            <div className="ui attached segment">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">Link to Project</a>
              <a>GitHub repo</a>
              <a>Demo</a>
            </div>
            <h4 className="ui bottom attached segment">
              <p>Technologies Used: React, Redux, Javascript, Ruby on Rails</p>
            </h4>
          </div>
        </div>


        <div className="item">
          <div className="image">
            <h1 className="projectTitle">FIM</h1>
            <img src={require("../images/projectLogos/fim.png")} alt=""/>
          </div>
          <div className="middle aligned content">
            <div className="ui top attached segment">
              <p>Description: Dating Application</p>
            </div>
            <div className="ui attached segment">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">Link to Project</a>
              <a>GitHub repo</a>
              <a>Demo</a>
            </div>
            <h4 className="ui bottom attached segment">
              <p>Technologies Used: React, Redux, Javascript, Ruby on Rails</p>
            </h4>
          </div>
        </div>

      </div>
    </div>
    )
  }

}

export default Projects
