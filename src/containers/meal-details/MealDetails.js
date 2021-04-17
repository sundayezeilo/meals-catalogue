import React from 'react';
import { PropTypes } from 'prop-types';
import './MealDetails.css';

export default function MealDetails({ location: { meal } }) {
  const bgStyle = {
    backgroundImage: `url(${meal.strMealThumb})`,
  };

  return (
    <div className="meal-item-detail" style={bgStyle}>
      <h3 className="meal-detail-title">{meal.strMeal}</h3>
      <p className="meal-detail-text">
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        <span>Numquam, corrupti recusandae velit dolore repellat suscipit aliquam!</span>
        <span>Modi qui fuga eius vitae, porro recusandae reprehenderit dolorem, repudiandae</span>
        <span>dignissimos unde dicta officiis!</span>
      </p>
    </div>
  );
}

MealDetails.propTypes = {
  location: PropTypes.objectOf(PropTypes.obeject).isRequired,
};
