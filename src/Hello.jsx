import React from "react";
import { Container } from "semantic-ui-react";

const Hello = () => {
    return (
      <Container>
          <h1 id="hello">Hello World</h1>
          <p>It's me, Ann. Welcome, I'm glad you dropped by. Here you can find fun facts about, see some of the projects I've been working on and also find my CV. So have a look around and if you want to get in contact send me an email: 
          </p>
          
            <form action="mailto:ann.flismark@gmail.com" method="post" enctype="text/plain">
            Name:<br>
            <input type="text" name="name"><br>
            E-mail:<br>
            <input type="text" name="mail"><br>
            Comment:<br>
            <input type="text" name="comment" size="50"><br><br>
            <input type="submit" value="Send">
            <input type="reset" value="Reset">
            </form> 
          
      </Container>
    );
};

export default Hello;