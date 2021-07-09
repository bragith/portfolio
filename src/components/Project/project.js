import React from 'react';
import './project.scss';
import festenImg from '../../resources/images/festen.png';
import festenTwoImg from '../../resources/images/festen2.png';

const Project = () => {
  return (
    <section id="project">
      <div className="skewedContainer">
        <div className="counterSkew">
          <img src={festenImg} alt="festen.dk" />
          <h1>FESTEN.DK</h1>
          <h2>An e-commerce website built with a React.js frontend</h2>
        </div>
      </div>
      <div className="stuff" />
    </section>
  );
};

export default Project;
