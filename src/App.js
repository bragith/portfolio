import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/header';
import Me from './components/me';
import Projects from './components/projects';
import Skills from './components/skills';
import You from './components/you';
import Frontpage from './components/frontpage';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header />
        <Frontpage />
        <Me />
        <Projects />
        <Skills />
        <You />
      </div>
    );
  }
}

export default App;
