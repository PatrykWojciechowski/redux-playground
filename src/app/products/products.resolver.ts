import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {State} from "../reducers";
import {fetchProducts} from "./product.actions";
import {first, tap} from "rxjs/operators";
import {ProductsModule} from "./products.module";

@Injectable()
export class ProductsResolver implements Resolve<any> {

  loading = false;

  constructor(
    private store: Store<State>
  ) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<any> {
    return this.store.pipe(
      tap(() => {
          if (!this.loading) {
            this.loading = true;
            this.store.dispatch(fetchProducts())
          }
      }),
      first()
    )
  }

}
