import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

function NewsletterLandingCard(props) {
  const newsletter = props.newsletter;

  return (
    <React.Fragment>
      <Card className="mx-2">
        <Card.Img src={newsletter.coverPhoto} />
        <Card.Header>
          <Card.Title>{newsletter.name}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text className="fst-italic">{newsletter.description}</Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );

  NewsletterLandingCard.propTypes = {
    newsletter: PropTypes.shape({
      id: PropTypes.number.isRequired,
      coverPhoto: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  };
}

export default NewsletterLandingCard;
