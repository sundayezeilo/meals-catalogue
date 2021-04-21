import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Meal.css';

export default function Meal({ meal }) {
  return (
    <div className="meal-item col-md-6 col-lg-4">
      <Link
        to={{
          pathname: `/${meal.strMeal.toLowerCase()}`,
          meal,
        }}
        className="meal-link"
      >
        <h3 className="meal-title">{meal.strMeal}</h3>
        <img className="meal-thumb" src={meal.strMealThumb} alt={meal.strMeal} />
      </Link>
    </div>
  );
}

Meal.propTypes = {
  meal: PropTypes.exact(
    {
      idMeal: PropTypes.string,
      strMeal: PropTypes.string,
      strMealThumb: PropTypes.string,
    },
  ).isRequired,
};
