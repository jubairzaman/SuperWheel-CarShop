import React from 'react';
import { Card } from 'react-bootstrap';
import './ReviewCard.css'

const ReviewCard = ({ reviewData }) => {
  const { name, img, review } = reviewData;
  return (






    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {review}
        </Card.Text>
      </Card.Body>

    </Card>
  );
};

export default ReviewCard;