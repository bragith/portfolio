import React from 'react';
import './mouseAnimation.scss';

const MouseAnimation = ({ show }) => (
  <div id="mouse" className={`${show ? 'show' : 'hide'}`}>
    <div id="scrollWheel">
      <div className="line" />
      <div className="line" />
      <div className="line" />
      <div className="line" />
      <div className="line" />
      <div className="line" />
      <div className="line" />
      <div className="line" />
      <div className="line" />
      <div className="line" />
    </div>
  </div>
);

export default MouseAnimation;
