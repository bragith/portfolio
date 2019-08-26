import React, { Component } from 'react';
import './App.scss';
import Me from './components/me';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
import Frontpage from './components/frontpage';
import ScrollToTop from './components/scrollToTop';
import BurgerMenu from './components/BurgerMenu/burgerMenu';

class App extends Component {
  componentDidMount() {
    window.addEventListener('');
  }

  render() {
    return (
      <div id="wrapper">
        {/* <Header /> */}
        <BurgerMenu />
        <Frontpage />
        <Skills />
        <Me />
        <Projects />
        <Contact />
        <ScrollToTop />
      </div>
    );
  }
}

export default App;
