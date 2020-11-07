import React from "react";
import { Container } from "semantic-ui-react"

const Resume = () => {
  return (
    <Container>
        <h1 id="resume-header">My Resume</h1>

        <h2>Experience</h2>
        <div class="ui list">
  <div class="item">
    <img class="ui avatar image" src="/images/avatar2/small/rachel.png">
    <div class="content">
      <a class="header">Rachel</a>
      <div class="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>
    </div>
  </div>

    </Container>
  );
};

export default Resume;