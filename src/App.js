import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/header';
import Me from './components/me';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
import Frontpage from './components/frontpage';
import ScrollToTop from './components/scrollToTop';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header />
        <Frontpage />
        <Me />
        <Skills />
        <Projects />
        <Contact />
        <ScrollToTop />
      </div>
    );
  }
}

export default App;
