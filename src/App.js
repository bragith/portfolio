import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Me from './components/me';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
import Frontpage from './components/frontpage';
import ScrollToTop from './components/scrollToTop';
import BurgerMenu from './components/BurgerMenu/burgerMenu';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="wrapper">
          <BurgerMenu />
          <Frontpage />
          <Me />
          <Skills />
          <Projects />
          <Contact />
          <ScrollToTop />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
