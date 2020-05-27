import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { StoreModule } from '@ngrx/store';
import * as fromProducts from './reducers';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromProducts.productsFeatureKey, fromProducts.reducers, { metaReducers: fromProducts.metaReducers })
  ]
})
export class ProductsModule { }
