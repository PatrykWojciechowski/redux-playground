import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ProductState} from "./product.reducers";

import * as fromProducts from "./product.reducers"

export const selectProductState =
  createFeatureSelector<ProductState>("product")

export const selectAllProducts = createSelector(
  selectProductState,
  fromProducts.selectAll
);

export const selectFoodProducts = createSelector(
  selectAllProducts,
  products => products.filter(product => product.type == 'FOOD')
);

// export const cheapestProduct = createSelector(
//   products,
//   products => products.sort((p1, p2) => p1.price > p2.price)[0]
// )
