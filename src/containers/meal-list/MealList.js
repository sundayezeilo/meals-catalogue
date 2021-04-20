import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, fetchMeals } from '../../actions/index';
import Meal from '../../components/meal/Meal';
import CategoryFilter from '../../components/category-filter/CategoryFilter';
import './MealList.css';

export default function MealList() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const allMeals = useSelector((state) => state.meals.mealList);

  useEffect(() => {
    dispatch(fetchMeals());
  }, []);

  const filteredMeals = filter === 'All' ? allMeals : allMeals.filter((meal) => meal.mealCategory === filter);

  const allCat = allMeals.map((meal) => meal.mealCategory);

  function handleFilterChange(filter) {
    dispatch(changeFilter(filter));
  }

  if (filteredMeals.loading) {
    return <h2>Loading...</h2>;
  }

  if (filteredMeals.error) {
    return <h2>{filteredMeals.error}</h2>;
  }

  return (
    <div className="meals container-fluid">
      <CategoryFilter onFilterChange={handleFilterChange} categoryList={allCat} />
      <div className="meal-list row">
        {
          filteredMeals.map((catMeals) => (
            catMeals.meals.map((thisMeal, idx) => (
              <Meal meal={thisMeal} mealCat={catMeals.mealCategory} key={`catMeal${idx + 1}`} />
            ))
          ))
        }
      </div>
    </div>
  );
}
