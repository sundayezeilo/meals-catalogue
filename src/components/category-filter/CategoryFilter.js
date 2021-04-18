import React from 'react';
import PropTypes from 'prop-types';
import './CategoryFilter.css';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

export default function CategoryFilter({ categoryList, onFilterChange }) {
  const allMealCategories = ['All', ...categoryList];

  const handleFilterChange = ({ target: { value } }) => {
    onFilterChange(value);
  };

  return (
    <div className="category-filter">
      <h3>
        <span>Select category</span>
        <DoubleArrowIcon />
      </h3>
      <select name="allMealCategories" onChange={handleFilterChange} defaultValue="All">
        {
          allMealCategories.map((catName) => <option value={catName} key={`${catName}_option`}>{catName}</option>)
        }
      </select>
    </div>
  );
}

CategoryFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  categoryList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
