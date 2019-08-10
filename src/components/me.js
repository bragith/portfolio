import React, { Component } from 'react';

const Me = () => (
  <section id="me" className="content">
    <div className="left">
      <img src={'http://www.lorempixel.com/500/500'} alt="about" />
    </div>
    <div className="right">
      <article id="aboutMe">
        <h1>About</h1>
        <p>
          Through my previous job at a start-up company I had the opportunity to
          use many different tools that are commonly found in the field of
          front-end development. HTML, CSS, JavaScript and API’s are at the top
          of the list as fundamentals for front-enders but I have also gotten
          the opportunity to use tools like git, React.js, NPM and Sass to name
          a few. Having started my web development studies in multimedia design
          and communication (MMD) I can truly say that I fit the profile for a
          good front-end’er.
        </p>
        <p>
          UX design, design theory, testing, user studies and much more are all
          skills thought during MMD, and those are all skills I have had my
          fingers on one way or another from my previous job. Being a small team
          of 4 required us to work closely together, discuss and bounce ideas
          back and forth until we hit the right outcome.
        </p>
        <p>
          Working for a start-up has pushed me to learn faster and work harder
          than I might have, if I had started my career elsewhere. Being a small
          team, I got to take part in working with all aspects of building a
          website. Whether it was sparring with the designer about UX, design
          theory and design trends, or discussing with the back-end developer
          about database setup, the API or simply shape the internal workflow
          between all members of the staff.
        </p>
      </article>
    </div>
  </section>
);

export default Me;
