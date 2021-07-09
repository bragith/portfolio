import React from 'react';
import { Link } from 'react-router-dom';

import festenImg from '../resources/images/festen-logo.svg';
import arabesqueImg from '../resources/images/arabesque-logo.jpg';
import arabesqueSvg from '../resources/images/arabesque.svg';

const projects = [
  {
    title: 'Festen.dk',
    img: festenImg,
    tags: ['React.js'],
    project: 'festen',
    color: '#619e98'
  },
  {
    title: 'Arabesque',
    img: arabesqueSvg,
    tags: ['WordPress'],
    project: 'arabesque',
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

const Project = ({ project: { title, img, tags, project, color } }) => {
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
        <Link className="button" to={`/projects/${project}`}>
          Show more
        </Link>
        {/* <a className="button" href={link} target="_blank">
          Visit Website >
        </a> */}
      </figcaption>
    </figure>
  );
};

export default Projects;
