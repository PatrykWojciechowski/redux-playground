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
  products => products.filter(product => product.category == 'FOOD')
);

export const areProductsLoaded = createSelector(
  selectProductState,
  state => state.productsLoaded
)
