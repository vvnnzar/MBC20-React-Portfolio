import React from "react";
import "./about.scss";

export default function About() {
  return (
    <div id="about" className="about">
      <div>
        <img src="assets/images/challenge.jpg" alt="person rock climbing" />
      </div>
      <div className="aboutContent">
        <h1 className="aboutlabel">Rising to the challenge</h1>
        <p>
          Working in the IT Industry for over 15 years as a Senior
          Business/Pre-Sales Consultant my role heavily focused on defining
          requirements to support the implementation of strategic and tactical
          initiatives.
        </p>
        <p>
          Returning to work after having my two beautiful children, I decided it
          was time to rise to the challenge and learn to 'build' that optimal
          solution.
        </p>
        <p>So here I am, a Full Stack Web Developer.</p>
        <p> With hard work and dedication anything is possible.</p>
        <p>I look forward to delivering a full solution for your business.</p>
        <p className="signOff">Regards, Vivianne Zara</p>
      </div>
    </div>
  );
}
