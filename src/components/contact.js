import React, { useRef } from 'react';
import mailBlackIcon from '../resources/icons/mail-black.svg';
import mailWhiteIcon from '../resources/icons/mail-white.svg';
import mailGreenIcon from '../resources/icons/mail-green.svg';

const Contact = () => {
  return (
    <section id="contact">
      <div className="content">
        <h1>Contact</h1>
        <div className="contactBtn">
          <span className="mailIcon" />
          Get in touch
        </div>
      </div>
    </section>
  );
};

export default Contact;
