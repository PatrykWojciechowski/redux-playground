import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {Product} from "../product.model";
import {select, Store} from "@ngrx/store";
import {State} from "../../reducers";
import {Update} from "@ngrx/entity";
import {productUpdated, selectProduct} from "../product.actions";
import {ActivatedRoute, ActivatedRouteSnapshot, Route} from "@angular/router";
import {filter, map, tap} from "rxjs/operators";
import {selectCurrentProduct, selectCurrentProductId} from "../product.selectors";
import {Observable} from "rxjs";
import {ProductEntityService} from "../../services/product-entity.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit {

  form = this.fb.group({
    name: new FormControl(''),
    price: new FormControl('')
  })

  product: Product;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private productEntityService: ProductEntityService,
  ) {
    const id = Number(this.route.snapshot.paramMap.get('productId'));



    this.productEntityService.entities$.pipe(
      map(products => {
        return products.find(prod => id === prod.id);
      })
    ).subscribe(currentProduct => {
        this.product = currentProduct
        this.form.reset({
          name: currentProduct.name,
          price: currentProduct.price
        })
      }
    )
  }

  ngOnInit(): void {
  }

  updateProduct() {
    const product: Product = {
      ...this.product,
      ...this.form.value
    };

    //It knows about which prod to update because it has an id
    this.productEntityService.update(product);
  }

}
