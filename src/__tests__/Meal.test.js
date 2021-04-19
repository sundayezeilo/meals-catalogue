import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Meal from '../components/meal/Meal';

describe('Meal', () => {
  const thisMeal = {
    strMeal: 'Baked salmon with fennel & tomatoes',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/1548772327.jpg',
    idMeal: '52959',
  };

  test('snapshot renders', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Meal meal={thisMeal} />
      </MemoryRouter>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
