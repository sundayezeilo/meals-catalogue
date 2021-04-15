import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Meal({ meal }) {
  return (
    <div>
      <Link to="/:name">
        <p>{meal.strMeal}</p>
        <p>{meal.strMealThumb}</p>
      </Link>
    </div>
  );
}

Meal.propTypes = {
  meal: PropTypes.exact(
    {
      strMeal: PropTypes.string,
      strMealThumb: PropTypes.string,
    },
  ).isRequired,
};
