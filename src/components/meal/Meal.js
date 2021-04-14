import React from 'react';
import { Link } from 'react-router-dom';

export default function Meal() {
  return (
    <div>
      <Link to="/:name">Meal</Link>
    </div>
  );
}
