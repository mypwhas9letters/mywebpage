import React from 'react'

class Projects extends React.Component{

  render() {
    return(
      <div className="ui container">
      <br/>
        <div className="ui divided items">

          <div className="item">
            <div className="image">
              <h1 className="projectTitle">Parallel</h1>
              <img src={require("../images/projectLogos/logo.png")} alt=""/>
            </div>
            <div className="middle aligned content">
              <div className="ui top attached segment">
                <p>Parallel: An Airbnb for parking spaces</p>
                <button className="ui primary button">
                  <a href="https://parallelp.herokuapp.com" target="_blank" rel="noopener noreferrer"><span style={{color: 'white'}}>Link to Project</span></a>
                </button>
                <button className="ui youtube button">
                  <i className="youtube icon"></i>
                  Demo
                </button>
                <button className="ui black button">
                  <i className="github icon"></i>
                  <a href="https://github.com/mypwhas9letters"><span style={{color: 'white'}}>Front End</span></a>
                </button>
                <button className="ui black button">
                  <i className="github icon"></i>
                  <a href="https://github.com/mypwhas9letters"><span style={{color: 'white'}}>Back End</span></a>
                </button>
              </div>
              <h4 className="ui bottom attached segment">
                <div className="ui tiny images">
                  <img src={require("../images/logos/react.png")} alt=""/>
                  <img src={require("../images/logos/redux.png")} alt=""/>
                  <img src={require("../images/logos/javascript.png")} alt=""/>
                  <img src={require("../images/logos/rails.png")} alt=""/>
                  <img src={require("../images/logos/ruby.png")} alt=""/>
                  <img src={require("../images/logos/html.png")} alt=""/>
                  <img src={require("../images/logos/css.svg")} alt=""/>
                </div>
              </h4>
            </div>
          </div>


        <div className="item">
          <div className="image">
            <h1 className="centerAndSize">LHFT</h1>
            <img src={require("../images/projectLogos/lets.png")} alt=""/>
          </div>
          <div className="middle aligned content">
            <div className="ui top attached segment">
              <p>Lets Have Fun Together: Social Networking Events App</p>
            </div>
            <div className="ui attached segment">
              <button className="ui primary button">
                <a href="https://lets-events.herokuapp.com/"  target="_blank" rel="noopener noreferrer"><span style={{color: 'white'}}>Link to Project</span></a>
              </button>
              <button className="ui youtube button">
                <i className="youtube icon"></i>
                Demo
              </button>
              <button className="ui black button">
                <i className="github icon"></i>
                <a href="https://github.com/mypwhas9letters"><span style={{color: 'white'}}>Front End</span></a>
              </button>
              <button className="ui black button">
                <i className="github icon"></i>
                <a href="https://github.com/mypwhas9letters"><span style={{color: 'white'}}>Back End</span></a>
              </button>
            </div>
            <h4 className="ui bottom attached segment">
              <p>Built with:</p>
              <div className="ui tiny images">
                <img src={require("../images/logos/rails.png")} alt=""/>
                <img src={require("../images/logos/ruby.png")} alt=""/>
                <img src={require("../images/logos/javascript.png")} alt=""/>
                <img src={require("../images/logos/html.png")} alt=""/>
                <img src={require("../images/logos/css.svg")} alt=""/>
              </div>
            </h4>
          </div>
        </div>


        <div className="item">
          <div className="image">
            <h1 className="centerAndSize">Posigram</h1>
            <img src={require("../images/projectLogos/instaFam.png")} alt=""/>
          </div>
          <div className="middle aligned content">
            <div className="ui top attached segment">
              <p>Posigram: Photo Sharing Application Where Negative Comments Are Blocked</p>
            </div>
            <div className="ui attached segment">
              <button className="ui primary button">
                <a href="https://github.com/"  target="_blank" rel="noopener noreferrer"><span style={{color: 'white'}}>Link to Project</span></a>
              </button>
              <button className="ui youtube button">
                <i className="youtube icon"></i>
                Demo
              </button>
              <button className="ui black button">
                <i className="github icon"></i>
                <a href="https://github.com/mypwhas9letters"><span style={{color: 'white'}}>Front End</span></a>
              </button>
              <button className="ui black button">
                <i className="github icon"></i>
                <a href="https://github.com/mypwhas9letters"><span style={{color: 'white'}}>Back End</span></a>
              </button>
            </div>
            <h4 className="ui bottom attached segment">
              <p>Built with:</p>
              <div className="ui tiny images">
                <img src={require("../images/logos/react.png")} alt=""/>
                <img src={require("../images/logos/javascript.png")} alt=""/>
                <img src={require("../images/logos/rails.png")} alt=""/>
                <img src={require("../images/logos/ruby.png")} alt=""/>
                <img src={require("../images/logos/html.png")} alt=""/>
                <img src={require("../images/logos/css.svg")} alt=""/>
              </div>
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
              <p>Flatiron Mingle: Dating Application</p>
            </div>
            <div className="ui attached segment">
              <button className="ui primary button">
                <a href="https://github.com/"  target="_blank" rel="noopener noreferrer"><span style={{color: 'white'}}>Link to Project</span></a>
              </button>
              <button className="ui youtube button">
                <i className="youtube icon"></i>
                Demo
              </button>
              <button className="ui black button">
                <i className="github icon"></i>
                <a href="https://github.com/mypwhas9letters"><span style={{color: 'white'}}>Front End</span></a>
              </button>
              <button className="ui black button">
                <i className="github icon"></i>
                <a href="https://github.com/mypwhas9letters"><span style={{color: 'white'}}>Back End</span></a>
              </button>
            </div>
            <h4 className="ui bottom attached segment">
              <p>Built with:</p>
              <div className="ui tiny images">
                <img src={require("../images/logos/javascript.png")} alt=""/>
                <img src={require("../images/logos/rails.png")} alt=""/>
                <img src={require("../images/logos/ruby.png")} alt=""/>
                <img src={require("../images/logos/html.png")} alt=""/>
                <img src={require("../images/logos/css.svg")} alt=""/>
              </div>
            </h4>
          </div>
        </div>

      </div>
      <br/>
    </div>
    )
  }

}

export default Projects
