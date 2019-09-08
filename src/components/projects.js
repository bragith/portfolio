import React, { Component } from 'react';
import festenImg from '../resources/images/festen-logo.svg';
import arabesqueImg from '../resources/images/arabesque-logo.jpg';

const projects = [
  {
    title: 'Festen.dk',
    img: festenImg,
    tags: ['React.js'],
    link: 'http://www.festen.dk',
    color: '#619e98'
  },
  {
    title: 'Arabesque',
    img: arabesqueImg,
    tags: ['WordPress'],
    link: 'http://www.arabesque.is',
    color: '#df2176'
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="content">
        <h1>Work</h1>
        <div className="projectsWrapper">
          {projects.map((project, i) => (
            <Project key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Project = ({ project: { title, img, tags, link, color } }) => {
  return (
    <figure className="project" style={{ backgroundColor: `${color}` }}>
      <img src={img} alt={title} />
      <figcaption>
        <h3>{title}</h3>
        <ul>
          {tags.map((tag, i) => (
            <li key={i}>{tag}</li>
          ))}
        </ul>
        <a className="button" href={link}>
          Visit Website >
        </a>
      </figcaption>
    </figure>
  );
};

export default Projects;
