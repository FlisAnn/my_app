import React from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";

const EducationCard = ({ education }) => {
  return (
    <Card>
      <Image src={education.image} wrapped ui={false} />
      <Link src={education.link} />
      <Card.Content>
        <Card.Header>{education.name}</Card.Header>
        <Card.Description>{education.description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default EducationCard;