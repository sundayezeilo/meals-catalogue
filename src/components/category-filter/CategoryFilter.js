import React from 'react';
import PropTypes from 'prop-types';

export default function CategoryFilter({ categoryList, onChangeFilter }) {
  const allMealCategories = ['All', ...categoryList];

  const handleFilterChange = ({ target: { value } }) => {
    onChangeFilter(value);
  };

  return (
    <div className="category-filter">
      <span>Filter by category</span>
      <select name="allMealCategories" onChange={handleFilterChange} defaultValue="All">
        {
          allMealCategories.map((catName) => <option value={catName} key={`${catName}_option`}>{catName}</option>)
        }
      </select>
    </div>
  );
}

CategoryFilter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  categoryList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
