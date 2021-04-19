import React from 'react';
import renderer from 'react-test-renderer';
import MealList from '../containers/meal-list/MealList';

test('Component renders correctly', () => {
  const component = renderer.create(
    <MealList />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
