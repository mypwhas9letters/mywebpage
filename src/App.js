import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavBar from './components/navBar';
import Home from './components/home';
import Resume from './components/resume';
import Profile from './components/profile';
import Projects from './components/projects';
import Footer from './components/footer';
// import Activities from './components/activities';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/projects' component={Projects} />
        <Footer />
      </div>
    )
  }
}

export default App;

// <Route exact path='/activities' component={Activities} />
