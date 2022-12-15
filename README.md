# HNZ-Product-Card

This is a test package to do release on NPM

### Henz A.

#### Example

```js
import { ProductCard } from 'hnz-product-card';
```

```js
<ProductCard
  product={product}
  initialValues={{
    count: 4,
    maxCount: 6,
  }}
>
  {({ reset, increaseBy, isMaxCountReached, count }) => (
    <>
      <ProductCard.Image />
      <ProductCard.Title />
      <ProductCard.Buttons />
    </>
  )}
</ProductCard>
```
