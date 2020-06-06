import {Injectable} from "@angular/core";
import {act, Actions, createEffect, ofType} from "@ngrx/effects";
import {ProductActions} from "./action-types";
import {concatMap, map, switchMap, tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Product} from "./product.model";
import {fetchProductsSuccessfully, productUpdated} from "./product.actions";

const GET_CLIENTS_API = 'http://localhost:3000/products';

@Injectable()
export class ProductEffects {

  fetchProducts$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(ProductActions.fetchProducts),
        concatMap(action => this.httpClient.get<Product[]>(GET_CLIENTS_API)),
        map(products => fetchProductsSuccessfully({products}))
    ))

  saveProduct$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(ProductActions.productUpdated),
        concatMap(action => this.httpClient.put<Product[]>(GET_CLIENTS_API + '/' + action.update.id, action.update.changes)),
      ),
    {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private httpClient: HttpClient
  ) {}
}
