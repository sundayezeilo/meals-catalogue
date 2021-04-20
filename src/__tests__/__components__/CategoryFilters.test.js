import React from 'react';
import renderer from 'react-test-renderer';
import CategoryFilter from '../../components/category-filter/CategoryFilter';

describe('CategoryFilter', () => {
  const allCat = ['cat1', 'cat2'];
  const handleFilterChange = () => {};

  test('Componenet renders correctly', () => {
    const component = renderer.create(
      <CategoryFilter onFilterChange={handleFilterChange} categoryList={allCat} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
