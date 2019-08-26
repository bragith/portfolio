import React, { useEffect, useRef } from 'react';

const Header = () => {
  return (
    <nav id="header">
      <div className="name">
        <h3>Bragi Þorsteinsson</h3>
        <p>Front-end Developer</p>
      </div>
      <ul>
        <li>Me</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Header;
