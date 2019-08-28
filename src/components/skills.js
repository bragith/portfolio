import React, { Component } from 'react';

const Skills = () => {
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
    }
  ];

  const skillSet3 = [
    {
      title: 'Design',
      elements: ['UX', 'Design Theory', 'Photoshop', 'Illustrator', 'Indesign']
    }
  ];

  return (
    <section id="skills">
      <div className="content">
        <SkillCategorie categorie={skillSet1} />
        <SkillCategorie categorie={skillSet2} />
        <SkillCategorie categorie={skillSet3} />
      </div>
    </section>
  );
};

const SkillCategorie = ({ categorie }) => {
  console.log(categorie);
  return (
    <div className="skillWrapper">
      {categorie.map((categorie, i) => (
        <div key={i} className="skillCategory">
          <div className="skillTitleWrapper">
            <h3 className="skillTitle">{categorie.title}</h3>
          </div>
          <div className="foldLeft" />
          <div className="foldRight" />

          <ul className="elementsWrapper">
            {categorie.elements.map((element, i) => (
              <li key={i}>
                <h4 className="element">{element}</h4>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
