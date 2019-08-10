import React, { useRef, useEffect } from 'react';
import arrowIcon from '../resources/icons/arrow.svg';

const ScrollToTop = () => {
  const toTopButton = useRef(null);

  // Show the toTopButton when scrolled down past 25px
  const showScrollToTop = () => {
    window.scrollY > 25
      ? (toTopButton.current.style.bottom = '25px')
      : (toTopButton.current.style.bottom = '-60px');
  };

  const onClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    // Adding the scroll event listener
    window.addEventListener('scroll', showScrollToTop, true);

    // Making sure to clean up the effect
    // by removing the scroll event listener
    return function cleanup() {
      window.removeEventListener('scroll', showScrollToTop);
    };
  });

  return (
    <div id="scrollToTop" ref={toTopButton} onClick={onClick}>
      <img src={arrowIcon} alt="arrow" />
    </div>
  );
};

export default ScrollToTop;
