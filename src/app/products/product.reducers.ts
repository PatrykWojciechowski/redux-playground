import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector, createReducer,
  createSelector,
  MetaReducer, on
} from '@ngrx/store';
import {compareProducts, Product} from "./product.model";
import {ProductActions} from "./action-types";
import {createEntityAdapter, EntityState} from "@ngrx/entity";

export const productsFeatureKey = 'products';

export interface ProductState extends EntityState<Product>{
  selectedProductId: number;
  productsLoaded: boolean;
}

export const adapter = createEntityAdapter<Product>({
  sortComparer: compareProducts
});

export const initialProductState = adapter.getInitialState({
  electedProductId: null,
  productsLoaded: false
});

export const productsReducer = createReducer(

  initialProductState,

  on(ProductActions.fetchProductsSuccessfully,
    (state, action) => adapter.addMany(
      action.products,
      {...state, productsLoaded: true}
    )),

  on(ProductActions.productUpdated,
    (state, action) => adapter.updateOne(
      action.update, state)
    ),

  on(ProductActions.selectProduct,
    (state, action) => ({...state, selectedProductId: action.id})
    )
)

export const {
 selectAll,
} = adapter.getSelectors();
