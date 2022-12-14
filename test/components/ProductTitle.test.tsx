import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product } from '../data/products';

describe('Product Title', () => {

  test('should show the component well mounted', () => {
    const wrapper = renderer.create(
      <ProductTitle title='custom product' className='custom-class' />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should show the component with the name of the product', () => {

    const wrapper = renderer.create(
      <ProductCard product={product}>
        {
          () => (
            <ProductTitle />
          )
        }

      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
})