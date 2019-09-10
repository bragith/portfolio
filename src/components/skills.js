import React from 'react';

const Skills = () => {
  // Hard coding skill sets,
  // Mimics a possible respons from an api

  // Primary skillset
  const skillSet1 = [
    {
      title: 'HTML (5)',
      elements: ['Semantic Markup']
    },
    {
      title: 'CSS (3)',
      elements: ['Animations', 'Sass', 'Less', 'Bootstrap', 'Foundation']
    },
    {
      title: 'JavaScript (ES6)',
      elements: ['React', 'jQuery', 'Redux', 'Knockout', 'NPM']
    }
  ];

  // Secondary skillset
  const skillSet2 = [
    {
      title: 'Tools',
      elements: ['Visual Studio Code', 'Git', 'Gulp', 'Grunt', 'WordPress']
    },
    {
      title: 'Backend',
      elements: ['SQL', 'Relational-Databases']
    },
    {
      title: 'Design',
      elements: ['UX', 'Design Theory', 'Photoshop', 'Illustrator', 'Indesign']
    }
  ];

  // Setting up for the skillset animation
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef(null);

  // Creating and starting the Intersection Observer
  React.useEffect(() => {
    const observer = new IntersectionObserver(showContent, { threshold: 0.6 });
    observer.observe(domRef.current);

    // Cleaning up, stopping the observation when the componend unmounts
    return () => observer.unobserve(domRef.current);
  }, []);

  // Callback function for the Intersection observer.
  // This makes sure the animation is only applyed once
  const showContent = entries => {
    if (!isVisible) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    }
  };

  return (
    <section ref={domRef} id="skills">
      <div className="content contained">
        <h1>Skillset</h1>
        <div className="skillSetWrapper">
          <div className={`right ${isVisible ? 'show' : 'hide'}`}>
            <SkillCategorie categorie={skillSet1} />
          </div>
          <div className={`left ${isVisible ? 'show' : 'hide'}`}>
            <SkillCategorie categorie={skillSet2} />
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCategorie = ({ categorie }) => {
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
