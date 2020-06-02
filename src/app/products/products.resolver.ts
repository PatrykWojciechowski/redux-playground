import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {State} from "../reducers";
import {fetchProducts} from "./product.actions";
import {filter, finalize, first, tap} from "rxjs/operators";
import {ProductsModule} from "./products.module";
import {areProductsLoaded} from "./product.selectors";

@Injectable()
export class ProductsResolver implements Resolve<any> {

  loading = false;

  constructor(
    private store: Store<State>
  ) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<any> {
    return this.store.pipe(
      select(areProductsLoaded),
      tap(prodcutsLoaded => {
          if (!this.loading && !prodcutsLoaded) {
            this.loading = true;
            this.store.dispatch(fetchProducts())
          }
      }),
      filter(productsLoaded => productsLoaded),
      first(),
      finalize(() => this.loading = false)
    )
  }

}
