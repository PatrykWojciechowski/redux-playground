import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector, createReducer,
  createSelector,
  MetaReducer, on
} from '@ngrx/store';
import {Product} from "./product.model";
import {ProductActions} from "./action-types";
import {createEntityAdapter, EntityState} from "@ngrx/entity";

export const productsFeatureKey = 'products';

export interface ProductState extends EntityState<Product>{
}

export const adapter = createEntityAdapter<Product>();

export const initialProductState = adapter.getInitialState();

export const productsReducer = createReducer(
  initialProductState,
  on(ProductActions.fetchProductsSuccessfully,
    (state, action) => adapter.addMany(action.products, state))
)

export const {
 selectAll
} = adapter.getSelectors();
