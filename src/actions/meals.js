import {
  FETCH_MEALS_REQUEST,
  FETCH_MEALS_SUCCESS,
  FETCH_MEALS_FAILURE,
} from '../action-types/index';

const axios = require('axios');

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
  console.log('fetching meals...');
  dispatch(fetchMealsRequest);
  try {
    const { data: { categories } } = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
    const arrOfPromises = categories.map((cat) => axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat.strCategory}`));
    const allMeals = await Promise.all(arrOfPromises);
    const meals = categories.reduce((acc, currVal, idx) => {
      acc[currVal.strCategory] = {
        categoryThumb: currVal.strCategoryThumb,
        categoryDescription: currVal.strCategoryDescription,
        categoryMeals: allMeals[idx].data.meals,
      };
      return acc;
    }, {});
    dispatch(fetchMealsSuccess(meals));
  } catch (err) {
    dispatch(fetchMealsFailure(err.message));
  }
};

export default fetchMeals;
