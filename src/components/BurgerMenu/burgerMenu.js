import React, { Component, useState, useEffect } from 'react';
import './burgerMenu.scss';

//Burger menu with icon that animates to x when opened and back to burger when closed

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="burgerWrapper">
      <div
        className={`iconWrapper${isOpen ? ' open' : ' closed'}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className="hide" />
        <span className="close closeOne" />
        <span className="close closeTwo" />
        <span className="hide" />
      </div>
      <nav className={`mainNav${isOpen ? ' show' : ''}`}>
        <ul>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;
