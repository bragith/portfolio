import React, { useState } from 'react';

const Contact = () => {
  const [showMail, setShowMail] = useState(false);

  return (
    <section id="contact">
      <div className="content">
        <h1>Contact</h1>
        <div className="contactBtn" onClick={() => setShowMail(true)}>
          <span className="mailIcon" />
          {showMail ? 'bragi4@hotmail.com' : 'Get in touch'}
        </div>
      </div>
    </section>
  );
};

export default Contact;
