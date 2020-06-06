import {createAction, props} from "@ngrx/store";
import {Product} from "./product.model";
import {Update} from "@ngrx/entity";

export const fetchProducts = createAction(
  "[Product Resolver] Fetch Products"
);

export const fetchProductsSuccessfully = createAction(
  "[Product Resolver] Fetch Products Successfully",
  props<{products: Product[]}>()
);

export const productUpdated = createAction(
  "[Product Details] Product Updated",
  props<{update: Update<Product>}>()
);

export const selectProduct = createAction(
  "[Product Details] Select Product",
  props<{id: number}>()
);



