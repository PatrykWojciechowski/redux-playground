import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable, of} from "rxjs";
import {ProductEntityService} from "../services/product-entity.service";
import {filter, first, map, tap} from "rxjs/operators";

@Injectable()
export class ProductsResolver implements Resolve<boolean> {

  constructor(private productsService: ProductEntityService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<boolean> {

    return this.productsService.loaded$
      .pipe(
        tap(loaded => {
          if (!loaded){
            this.productsService.getAll();
          }
        }),
        filter(loaded => !!loaded),
        first()
      )
  }

}
