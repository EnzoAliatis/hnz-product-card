import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { product } from '../data/products';

const { act } = renderer;

describe('ProductCart', () => {
  test('should show the component well mounted', () => {
    const wrapper = renderer.create(
      <ProductCard product={product} className="custom-class">
        {() => <h1>Product Cart</h1>}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('the counter should work', () => {
    const wrapper = renderer.create(
      <ProductCard product={product} className="custom-class">
        {({ count, increaseBy }) => (
          <>
            <h1>Product Card</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(3)}>+3</button>
          </>
        )}
      </ProductCard>
    );

    let tree = wrapper.toJSON();

    expect(tree).toMatchSnapshot();

    act(() => {
      (tree as any).children[2].props.onClick();
    });

    tree = wrapper.toJSON();

    expect((tree as any).children[1].children[0]).toBe('3');
  });
});
