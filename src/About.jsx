import React from "react";
import { Container } from "semantic-ui-react"

const About = () => {
  return (
    <Container>
      <h1 id="about-header">About Me</h1>
      <img src="./images/ann.png"></img>
        <p>
          I am a positive person who enjoys working with great people. Creativity, whiteboards, pens and colours make me happy and inspired. 
          One of my passions is working with processes and trying new things to improve the way we work and continuously learn how to be better.
          I have long experience from working in and with agile processes and I have tried out different roles such as Test Manager, Scrum Master and tester. 
          I am driven by solving problems and enjoy working in projects with awesome colleagues, variation and new challenges.
        </p>
    </Container>
  );
};

export default About;