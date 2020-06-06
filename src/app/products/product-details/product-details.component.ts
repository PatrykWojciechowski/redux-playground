import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {Product} from "../product.model";
import {select, Store} from "@ngrx/store";
import {State} from "../../reducers";
import {Update} from "@ngrx/entity";
import {productUpdated, selectProduct} from "../product.actions";
import {ActivatedRoute, ActivatedRouteSnapshot, Route} from "@angular/router";
import {filter, tap} from "rxjs/operators";
import {selectCurrentProduct, selectCurrentProductId} from "../product.selectors";
import {Observable} from "rxjs";

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
    private store: Store<State>,
    private route: ActivatedRoute
  ) {
    const id = Number(this.route.snapshot.paramMap.get('productId'));

    this.store
      .dispatch(selectProduct({id}));

    this.store.pipe(
      select(selectCurrentProduct),
      filter(p => !!p)
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

    const update: Update<Product> = {
      id: this.product.id,
      changes: product
    }
    console.log('update', update);

    this.store.dispatch(productUpdated({update}))
  }

}
