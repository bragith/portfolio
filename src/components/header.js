import React, { useEffect, useRef } from 'react';

const Header = () => {
  const header = useRef(null);

  // Changes the header height when scrolled
  // to and from the top of the screen
  const changeHeaderHeight = () => {
    window.scrollY > 25
      ? (header.current.style.height = '50px')
      : (header.current.style.height = '200px');
  };

  useEffect(() => {
    // Adding the scroll event listener
    window.addEventListener('scroll', changeHeaderHeight, true);

    // Making sure to clean up the effect
    // by removing the scroll event listener
    return function cleanup() {
      window.removeEventListener('scroll', changeHeaderHeight);
    };
  });

  return (
    <nav id="header" ref={header}>
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
