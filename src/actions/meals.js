const axios = require('axios');

import {
  FETCH_MEALS_REQUEST,
  FETCH_MEALS_SUCCESS,
  FETCH_MEALS_FAILURE
} from '../action-types/index';

const fetchMealsRequest = () => ({
  type: FETCH_MEALS_REQUEST,
});

const fetchMealsSuccess = (meals) => ({
  type: FETCH_MEALS_SUCCESS,
  payload: meals,
});

const fetchMealsFailure = (error) => ({
  type: FETCH_MEALS_FAILURE,
  payload: error,
});

const fetchMeals = () => async (dispatch) => {
  dispatch(fetchMealsRequest);
  try {
    const { data: categories } = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
    const mealsList = {};
    const arraOfPromises = categories.map((cat) => {
      return axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat.strCategory}`);
    });
    const allMeals = await Promise.all(arrOfPromises);
    categories.forEach((cat, idx) => {
      const thisCatMeals = {
        categoryThumb: cat.strCategoryThumb,
        categoryDescription: cat.strCategoryDescription,
        categoryMeals: allMeals[idx],
      };
      mealsList[cat.strCategory] = thisCatMeals;
    });
    dispatch(fetchMealsSuccess(mealsList));
  } catch (err) {
    dispatch(fetchMealsFailure(err.message));
  }
};

export default fetchMeals;
