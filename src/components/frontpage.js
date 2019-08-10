import React, { Component } from 'react';
import manImg from '../resources/images/man.png';
const Frontpage = () => (
  <section id="frontPage" className="content">
    <header>
      <p>I am</p>
      <h1>Bragi Þorsteinsson</h1>
    </header>
    <div id="imgContainer">
      <img src={manImg} alt="Me" />
    </div>
  </section>
);

export default Frontpage;
