import React from "react";
import { Container } from "semantic-ui-react"

const About = () => {
  return (
    <Container>
      <h1 id="about-header">About Me</h1>
        <img src="./images/ann.png" alt="ann"></img>
          <p>
            I am a positive person who enjoys working with great people. Creativity, whiteboards, pens and colours make me happy and inspired. 
            One of my passions is working with processes and trying new things to improve the way we work and continuously learn how to be better.
          </p>
          <p>
            <img src="./images/pipochmio.png" alt="cats"></img>
            Besides being really into becoming a web developer I have two cats called Pip and Mio. And a son that is 2 years old.
            <img src="./images/kotten.png" alt="kid"></img>
          </p>
          <p>
            I have long experience from working in and with agile processes and I have tried out different roles such as Test Manager, Scrum Master and tester. 
            I am driven by solving problems and enjoy working in projects with awesome colleagues, variation and new challenges.
          </p>
          <p>     
            In the spring of 2020 Corona hit the world and everything changed. I lost my job. I applied for many other jobs but the market 
            was not in a good place. Also I felt irrelevant in the job market for the first time. For years I've been advocating personal responisibiliyt for ones code, 
            test driven development and a user oriented point of view. As SAFe is 
            coming to become reality in many big companies the need of a tester if finally
            not certain. So I took the oppetunity to do something else. Since I love the IT-industry and have been working in it for 13 years I figured I should get on the other side
            of the desk and become a developer. So I enrolled in the best BootCamp I could find and in February 2021 I am ready to create some awesome software on my on. 
            </p>

    </Container>
  );
};

export default About;