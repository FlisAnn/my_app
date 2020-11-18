import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{project.name}</Card.Header>

        <Card.Description>{project.description}</Card.Description>
      </Card.Content>
      {/* <Card.Content>
        <a href={project.github}>
        <Icon name="github" id={`gitIcon-${project.id}`} />
        </a>
      </Card.Content> */}
    </Card>
  );
};

export default ProjectCard;