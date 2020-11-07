import React from "react";
import { Card, Image } from "semantic-ui-react";

const WorkCard = ({ work }) => {
  return (
    <Card>
      <Image src={work.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{work.name}</Card.Header>
        <Card.Description>{work.description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default WorkCard;