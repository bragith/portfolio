import React, { useEffect, useRef, useState } from 'react';
import manImg from '../resources/images/man.png';
const Frontpage = () => {
  return (
    <section id="frontPage" className="content">
      <header>
        <p>Hi!</p>
        <h1>
          My name is <span>Bragi Þorsteinsson</span>
          <br /> and am a <span>front-end developer</span>
          <br /> based in Odense, Denmark.
        </h1>
      </header>
      <div id="imgContainer">
        <img src={manImg} alt="Me" />
      </div>
      <div className="scrollDown">
        <span />
        <span />
      </div>
    </section>
  );
};

export default Frontpage;
