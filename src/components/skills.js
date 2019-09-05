import React, { Component } from 'react';

const Skills = () => {
  const skillSets = [
    {
      title: 'HTML(5)',
      elements: ['Semantic Markup']
    },
    {
      title: 'CSS(3)',
      elements: ['Animations', 'Sass', 'Less', 'Bootstrap', 'Foundation']
    },
    {
      title: 'JavaScript(ES6)',
      elements: ['React', 'jQuery', 'Redux', 'Knockout', 'NPM']
    },
    {
      title: 'Tools',
      elements: ['Visual Studio Code', 'Git', 'Gulp', 'Grunt', 'WordPress']
    },
    {
      title: 'Backend',
      elements: ['SQL', 'Relational Databases']
    },
    {
      title: 'Design',
      elements: ['UX', 'Design Theory', 'Photoshop', 'Illustrator', 'Indesign']
    }
  ];
  const skillSet1 = [
    {
      title: 'HTML(5)',
      elements: ['Semantic Markup']
    },
    {
      title: 'CSS(3)',
      elements: ['Animations', 'Sass', 'Less', 'Bootstrap', 'Foundation']
    },
    {
      title: 'JavaScript(ES6)',
      elements: ['React', 'jQuery', 'Redux', 'Knockout', 'NPM']
    }
  ];

  const skillSet2 = [
    {
      title: 'Tools',
      elements: ['Visual Studio Code', 'Git', 'Gulp', 'Grunt', 'WordPress']
    },
    {
      title: 'Backend',
      elements: ['SQL', 'Relational Databases']
    },
    {
      title: 'Design',
      elements: ['UX', 'Design Theory', 'Photoshop', 'Illustrator', 'Indesign']
    }
  ];

  const skillSet3 = [];

  return (
    <section id="skills">
      <div className="content contained">
        <h1>Skillset</h1>
        <div className="skillSetWrapper">
          <div className="right">
            <SkillCategorie categorie={skillSet1} />
          </div>
          <div className="left">
            <SkillCategorie categorie={skillSet2} />
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCategorie = ({ categorie }) => {
  console.log(categorie);
  return categorie.map((categorie, i) => (
    <div key={i} className="skillCategory">
      <h3 className="skillTitle">{categorie.title}</h3>
      <ul className="elementsWrapper">
        {categorie.elements.map((element, i) => (
          <li key={i}>
            <h4 className="element">{element}</h4>
          </li>
        ))}
      </ul>
    </div>
  ));
};

export default Skills;
