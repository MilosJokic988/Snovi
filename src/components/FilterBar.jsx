import React from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

function FilterBar({ filter, setFilter }) {
  const options = [
    { value: 'all', label: 'Svi' },
    { value: 'dream', label: 'Snovi' },
    { value: 'nightmare', label: 'Košmari' },
    { value: 'symbolic', label: 'Simbolični' },
  ];

  return (
    <ButtonGroup className="mb-4">
      {options.map((opt, idx) => (
        <ToggleButton
          key={idx}
          id={`filter-${opt.value}`}
          type="radio"
          variant="outline-light"
          name="filter"
          value={opt.value}
          checked={filter === opt.value}
          onChange={(e) => setFilter(e.currentTarget.value)}
        >
          {opt.label}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
}

export default FilterBar;
