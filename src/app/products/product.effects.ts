import {Injectable} from "@angular/core";
import {act, Actions, createEffect, ofType} from "@ngrx/effects";
import {ProductActions} from "./action-types";
import {concatMap, map, switchMap, tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Product} from "./product.model";
import {fetchProductsSuccessfully} from "./product.actions";

const GET_CLIENTS_API_URL = 'http://localhost:3000/products';

@Injectable()
export class ProductEffects {

  fetchProducts$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(ProductActions.fetchProducts),
        switchMap(action => this.httpClient.get<Product[]>(GET_CLIENTS_API_URL)),
        map(products => fetchProductsSuccessfully({products}))
    ))

  constructor(
    private actions$: Actions,
    private httpClient: HttpClient
  ) {}
}
