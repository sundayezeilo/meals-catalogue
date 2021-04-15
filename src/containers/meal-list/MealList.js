import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, fetchMeals } from '../../actions/index';
import Meal from '../../components/meal/Meal';
import CategoryFilter from '../../components/category-filter/CategoryFilter';

export default function MealList() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const meals = filter === 'All' ? useSelector((state) => state.meals)
    : useSelector((state) => state.meals).filter((book) => book.category === filter);

  useEffect(() => {
    dispatch(fetchMeals());
    return () => {
      // cleanup
    };
  }, []);

  function handleFilterChange(filter) {
    dispatch(changeFilter(filter));
  }

  return (
    <div className="book-list">
      <CategoryFilter changeFilter={handleFilterChange} categoryList={Object.keys(meals)} />
      {meals.map((catMealsArray, idx) => (
        <Meal meal={catMealsArray} key={`catMeal${idx + 1}`} />
      ))}
    </div>
  );
}
