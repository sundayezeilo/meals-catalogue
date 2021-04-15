import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Meal({ strMeal, strMealThumb }) {
  return (
    <div>
      <Link to="/:name">
        <p>{strMeal}</p>
        <p>{strMealThumb}</p>
      </Link>
    </div>
  );
}

Meal.propTypes = {
  strMeal: PropTypes.objectOf(PropTypes.string).isRequired,
  strMealThumb: PropTypes.objectOf(PropTypes.string).isRequired,
};
