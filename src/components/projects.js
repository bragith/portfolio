import React, { Component } from 'react';
import festenImg from '../resources/images/festen-logo.svg';
import arabesqueImg from '../resources/images/arabesque-logo.png';

const projects = [
  {
    title: 'Festen.dk',
    img: festenImg,
    description:
      'E-commerce and service platform with everything you need to thow the party of your life',
    link: 'www.festen.dk',
    color: '#619e98'
  },
  {
    title: 'Arabesque',
    img: arabesqueImg,
    description: 'Dance courses for kids in all age groups',
    link: 'www.arabesque.is',
    color: '#df2176'
  },
  {
    title: 'Festen.dk',
    img: festenImg,
    description:
      'E-commerce and service platform with everything you need to thow the party of your life',
    link: 'www.festen.dk',
    color: '#619e98'
  },
  {
    title: 'Arabesque',
    img: arabesqueImg,
    description: 'Dance courses for kids in all age groups',
    link: 'www.arabesque.is',
    color: '#df2176'
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="content">
        {projects.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </div>
    </section>
  );
};

const Project = ({ project: { title, img, description, link, color } }) => {
  console.log(img);

  return (
    <figure className="project" style={{ backgroundColor: `${color}` }}>
      <img src={img} alt={title} />
      <figcaption>
        <h3>{title}</h3>
        <p>{description}</p>
        <a className="button" href={link}>
          Visit Website >
        </a>
      </figcaption>
    </figure>
  );
};

export default Projects;
