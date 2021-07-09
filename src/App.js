import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Frontpage from './components/frontpage';
import BurgerMenu from './components/BurgerMenu/burgerMenu';
import Project from './components/Project/project';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="wrapper">
          <BurgerMenu />
          <Switch>
            <Route exact path="/">
              <Frontpage />
            </Route>
            <Route path="/projects/:project">
              <Project />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
