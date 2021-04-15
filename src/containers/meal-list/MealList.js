import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, fetchMeals } from '../../actions/index';
import Meal from '../../components/meal/Meal';
import CategoryFilter from '../../components/category-filter/CategoryFilter';

export default function MealList() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  useEffect(() => {
    console.log('MealList mounted');
    dispatch(fetchMeals());
    return () => {
      // cleanup
    };
  }, []);

  const meals = filter === 'All' ? useSelector((state) => state.meals)
    : useSelector((state) => state.meals);
  const allCat = Object.keys(meals.mealList);

  console.log('Meal List -> Beef\n', meals.mealList['Beef'].categoryMeals);

  function handleFilterChange(filter) {
    dispatch(changeFilter(filter));
  }

  if (meals.loading) {
    return <h2>Loading...</h2>;
  }
  if (meals.error) {
    return <h2>{meals.error}</h2>;
  }
  // console.log(meals.mealList['Beef'].categoryMeals);
  return (
    <div className="meal-list">
      <CategoryFilter onChangeFilter={handleFilterChange} categoryList={allCat} />
      {
        allCat && allCat.map((catName) => (
          meals.mealList[catName].categoryMeals.map((thisMeal, idx) => (
            <Meal meal={thisMeal} key={`catMeal${idx + 1}`} />
          ))
        ))
      }
    </div>
  );
}
