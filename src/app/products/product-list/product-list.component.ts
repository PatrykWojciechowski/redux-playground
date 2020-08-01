import {Component, OnInit} from '@angular/core';
import {Product} from "../product.model";
import {Observable} from "rxjs";
import {ProductEntityService} from "../../services/product-entity.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(
    private productSerivce: ProductEntityService
  ) {
    this.products$ = this.productSerivce.entities$;
  }

  ngOnInit(): void {
  }

}
