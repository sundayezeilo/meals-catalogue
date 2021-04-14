import React from 'react';
import { Link } from 'react-router-dom';

export default function Recipe() {
  return (
    <div>
      <Link to="/:name">Recipe</Link>
    </div>
  );
}
