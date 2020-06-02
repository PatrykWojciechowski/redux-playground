import {createAction, props} from "@ngrx/store";
import {Product} from "./product.model";

export const fetchProducts = createAction(
  "[Product Resolver] Fetch Products"
);

export const fetchProductsSuccessfully = createAction(
  "[Product Resolver] Fetch Products Successfully",
  props<{products: Product[]}>()
);


