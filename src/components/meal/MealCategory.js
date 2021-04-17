import React from 'react';
import PropTypes from 'prop-types';
import Meal from './Meal';
import './MealCategory.css';

export default function MealCategory({ catMeals }) {
  return (
    <div>
      <h2>{catMeals['mealCategory']}</h2>
      <div className="meal-cat">
        {
          catMeals.meals.map((thisMeal, idx) => (
            <Meal meal={thisMeal} key={`catMeal${idx + 1}`} />
          ))
        }
      </div>
    </div>
  );
}

MealCategory.propTypes = {
  catMeals: PropTypes.arrayOf(PropTypes.object).isRequired,
};
