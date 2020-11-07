import React from "react";
import { Card, Image } from "semantic-ui-react";

const EducationCard = ({ education }) => {
  return (
    <Cards>
      <Image src={education.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{education.name}</Card.Header>
        <Card.Description>{education.description}</Card.Description>
      </Card.Content>
    </Cards>
  );
};

export default EducationCard;