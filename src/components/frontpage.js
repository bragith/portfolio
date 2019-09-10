import React, { useEffect, useState } from 'react';
import manImg from '../resources/images/man.png';
import MouseAnimation from './MouseAnimation/mouseAnimation';

const Frontpage = () => {
  const [showMouse, setShowMouse] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', whenScroll);

    //Cleanup
    return () => window.removeEventListener('scroll', whenScroll);
  }, []);

  const whenScroll = () => {
    window.scrollY > 0 ? setShowMouse(false) : setShowMouse(true);
  };

  return (
    <section id="frontPage">
      <div className="content contained">
        <header>
          <p>Hi!</p>
          <h1>
            My name is <span>Bragi Þorsteinsson</span>
            <br /> and am a <span>front-end developer</span>
            <br /> based in Odense, Denmark.
          </h1>
        </header>
        <div id="imgContainer">
          <img src={manImg} alt="Me" />
        </div>
        <MouseAnimation show={showMouse} />
      </div>
    </section>
  );
};

export default Frontpage;
