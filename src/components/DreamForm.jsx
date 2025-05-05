import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

function DreamForm({ onAddDream }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('dream');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !date) return;

    const newDream = { title, description, date, type };
    onAddDream(newDream);

    // Reset forme
    setTitle('');
    setDescription('');
    setDate('');
    setType('dream');
  };

  return (
    <Card className="bg-secondary text-light mb-4">
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Naslov sna</Form.Label>
            <Form.Control
              type="text"
              placeholder="Unesi naslov..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-dark text-light"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Opis sna</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Opisi san ili košmar..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-dark text-light"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Datum</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-dark text-light"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Vrsta sna</Form.Label>
            <Form.Select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="bg-dark text-light"
            >
              <option value="dream">San</option>
              <option value="nightmare">Košmar</option>
              <option value="symbolic">Simboličan</option>
            </Form.Select>
          </Form.Group>

          <Button variant="outline-light" type="submit">
            Sačuvaj san
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default DreamForm;
