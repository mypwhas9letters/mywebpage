import React from 'react'

class Projects extends React.Component{

  render() {
    return(
      <div className="ui container">
      <br/>
        <div className="ui divided items">

          <div className="item">
            <div className="image">
              <h1 className="centerAndSize">Bit Regret</h1>
              <img src={require("../images/projectLogos/bitregret.png")} alt=""/>
            </div>
            <div className="middle aligned content">
              <div className="ui top attached segment">
                <p>Bit Regret: I shoud've bought Bitcoin.</p>
                <p>
                  I started learning about bitcoin around the same time I started leaning to code. I started my coding bootcamp on 7-17-17 and paid $15,000 in tuition. If I used that money to buy bitcoin on 7-17-17, it would be worth $127,785.23 today, 12/20/2017. Today I'm sitting there with the ability to create this project instead of $127,785.23 dollars. So, I created this app to spread my misery. This app shows you how much money you could've made if you bought bitcoin from an earlier date.
                </p>
              </div>
              <div className="ui attached segment">
                <button className="ui primary button">
                  <a href="https://bitregret.cc" target="_blank" rel="noopener noreferrer"><span style={{color: 'white'}}>Link to Project</span></a>
                </button>
                <button className="ui black button">
                  <i className="github icon"></i>
                  <a href="https://github.com/mypwhas9letters/bit-regret"><span style={{color: 'white'}}>Github Repo</span></a>
                </button>
              </div>
              <h4 className="ui bottom attached segment">
                <div className="ui tiny images">
                  <img src={require("../images/logos/react.png")} alt=""/>
                  <img src={require("../images/logos/redux.png")} alt=""/>
                  <img src={require("../images/logos/javascript.png")} alt=""/>
                  <img src={require("../images/logos/html.png")} alt=""/>
                  <img src={require("../images/logos/css.svg")} alt=""/>
                </div>
              </h4>
            </div>
          </div>

          <div className="item">
            <div className="image">
              <h1 className="projectTitle">Parallel</h1>
              <img src={require("../images/projectLogos/logo.png")} alt=""/>
            </div>
            <div className="middle aligned content">
              <div className="ui top attached segment">
                <p>Parallel: An Airbnb for parking spaces.</p>
                <p>Finding parking in a crowded city can be very difficult. All those hours spent circling blocks and looking for an empty parking space. Constantly disappointed to find empty spaces to be someone's driveway. This app allows homeowners to rent away their driveways and drivers to rent availble parking spaces.</p>
              </div>
              <div className="ui attached segment">
                <button className="ui primary button">
                  <a href="https://parallelp.herokuapp.com" target="_blank" rel="noopener noreferrer"><span style={{color: 'white'}}>Link to Project</span></a>
                </button>
                <button className="ui youtube button">
                  <i className="youtube icon"></i>
                  <a href="https://www.youtube.com/watch?v=z5vbNNILsso&feature=youtu.be"  target="_blank" rel="noopener noreferrer"><span style={{color: 'white'}}>Demo</span></a>
                </button>
                <button className="ui black button">
                  <i className="github icon"></i>
                  <a href="https://github.com/mypwhas9letters/parking-front"><span style={{color: 'white'}}>Front End</span></a>
                </button>
                <button className="ui black button">
                  <i className="github icon"></i>
                  <a href="https://github.com/mypwhas9letters/parking-backend"><span style={{color: 'white'}}>Back End</span></a>
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
              <p>Let's Have Fun Together: Social Networking Events App</p>
              <p>An app to keep your events organized. Users can search for upcoming events, buy tickets, and see where their friends are up to.  </p>
            </div>
            <div className="ui attached segment">
              <button className="ui primary button">
                <a href="https://lets-events.herokuapp.com/"  target="_blank" rel="noopener noreferrer"><span style={{color: 'white'}}>Link to Project</span></a>
              </button>
              <button className="ui youtube button">
                <i className="youtube icon"></i>
                <a href="https://www.youtube.com/watch?v=-WCUovxEPIM&feature=youtu.be"  target="_blank" rel="noopener noreferrer"><span style={{color: 'white'}}>Demo</span></a>
              </button>
              <button className="ui black button">
                <i className="github icon"></i>
                <a href="https://github.com/mthorry/EventsApp"><span style={{color: 'white'}}>Github Repo</span></a>
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
                <a href="https://github.com/"  target="_blank" rel="noopener noreferrer"><span style={{color: 'white'}}>Deploy In Progress</span></a>
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
                <a href="https://github.com/"  target="_blank" rel="noopener noreferrer"><span style={{color: 'white'}}>Deploy In Progress</span></a>
              </button>
              <button className="ui youtube button">
                <i className="youtube icon"></i>
                <a href="https://www.youtube.com/watch?v=joNrkW-PDCU"  target="_blank" rel="noopener noreferrer"><span style={{color: 'white'}}>Demo</span></a>
              </button>
              <button className="ui black button">
                <i className="github icon"></i>
                <a href="https://github.com/mypwhas9letters/Flatiron-Mingle-FrontEnd"><span style={{color: 'white'}}>Front End</span></a>
              </button>
              <button className="ui black button">
                <i className="github icon"></i>
                <a href="https://github.com/mypwhas9letters/Flatiron-Mingle"><span style={{color: 'white'}}>Back End</span></a>
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
