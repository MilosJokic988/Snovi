import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import DreamForm from './components/DreamForm';
import DreamCard from './components/DreamCard';
import FilterBar from './components/FilterBar';

function App() {
  const [dreams, setDreams] = useState([]);
  const [filter, setFilter] = useState('all');

  const addDream = (dream) => {
    setDreams([dream, ...dreams]);
  };

  const deleteDream = (dreamToDelete) => {
    setDreams(dreams.filter((dream) => dream !== dreamToDelete));
  };

  const filteredDreams = dreams.filter((d) =>
    filter === 'all' ? true : d.type === filter
  );

  return (
    <Container className="bg-dark text-light min-vh-100 py-4">
      <h1 className="text-center mb-4">🕯️ Dnevnik snova i košmara</h1>
      <DreamForm onAddDream={addDream} />
      <FilterBar filter={filter} setFilter={setFilter} />
      {filteredDreams.map((dream, idx) => (
        <DreamCard 
          key={idx} 
          dream={dream} 
          onDelete={deleteDream} // Prosleđujemo funkciju za brisanje
        />
      ))}
    </Container>
  );
}

export default App;
