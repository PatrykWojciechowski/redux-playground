import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {fetchProducts} from "../product.actions";
import {Product} from "../product.model";
import {Observable} from "rxjs";
import {selectAllProducts} from "../product.selectors";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(
    private store: Store
  ) {
    this.products$ = this.store.pipe(
      select(selectAllProducts)
    )
  }

  ngOnInit(): void {
  }

}
