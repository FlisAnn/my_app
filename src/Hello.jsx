import React from "react";
import { Container } from "semantic-ui-react";

const Hello = () => {
    return (
      <Container>
          <h1 id="hello">Hello World</h1>
          <p>
            It's me, Ann. 
           </p>
           <p> 
            Welcome, I'm glad you dropped by. 
            Here you can find fun facts about me, see some of the projects I've been working on and also find my CV. 
                   
          <img src="./images/hello.png" alt="hello"></img>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
   
            So have a look around and if you want to get in contact go to <a href="https://www.linkedin.com/in/annflismark/" target="_blank" rel="noreferrer">my linkedin page</a>! 
          </p>
          
           
          
      </Container>
    );
};

export default Hello;