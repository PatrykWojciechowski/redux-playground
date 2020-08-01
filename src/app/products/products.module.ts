import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from './product-list/product-list.component';
import {StoreModule} from '@ngrx/store';
import {productsReducer} from './product.reducers';
import {EffectsModule} from "@ngrx/effects";
import {ProductEffects} from "./product.effects";
import {RouterModule, Routes} from "@angular/router";
import {ProductsResolver} from "./products.resolver";
import {HttpClientModule} from "@angular/common/http";
import { ProductDetailsComponent } from './product-details/product-details.component';
import {ReactiveFormsModule} from "@angular/forms";
import {EntityDataModule, EntityMetadataMap, EntityDefinitionService, EntityDataService} from '@ngrx/data';
import {ProductsDataService} from "./products-data.service";
import {ProductEntityService} from "../services/product-entity.service";

export const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    resolve: {
      products: ProductsResolver
    }
  },
  {
    path: ':productId',
    component: ProductDetailsComponent,

  }
]

const entityMetadata: EntityMetadataMap = {
  Product: {

  }
}


@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      "product",
      productsReducer
    ),
    EffectsModule.forFeature([
      ProductEffects
    ]),
    HttpClientModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  providers: [
    ProductEntityService,
    ProductsResolver,
    ProductsDataService
  ]
})
export class ProductsModule {

  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private productDataService: ProductsDataService
  ) {

    eds.registerMetadataMap(entityMetadata);

    entityDataService.registerService('Product', productDataService)
  }


}
