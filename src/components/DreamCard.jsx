import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';

function DreamCard({ dream, onDelete }) {
  const getTypeBadge = (type) => {
    switch (type) {
      case 'dream':
        return <Badge bg="info" className="ms-2">San</Badge>;
      case 'nightmare':
        return <Badge bg="danger" className="ms-2">Košmar</Badge>;
      case 'symbolic':
        return <Badge bg="warning" text="dark" className="ms-2">Simboličan</Badge>;
      default:
        return null;
    }
  };

  return (
    <Card className="bg-secondary text-light mb-3 shadow">
      <Card.Body>
        <Card.Title>
          {dream.title}
          {getTypeBadge(dream.type)}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{dream.date}</Card.Subtitle>
        <Card.Text>{dream.description}</Card.Text>
        <Button 
          variant="outline-danger" 
          onClick={() => onDelete(dream)} 
          className="mt-2"
        >
          Obriši
        </Button>
      </Card.Body>
    </Card>
  );
}

export default DreamCard;
