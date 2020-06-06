import {Injectable} from "@angular/core";
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import {Product} from "../products/product.model";

@Injectable()
export class ProductEntityService extends EntityCollectionServiceBase<Product>{

  constructor(serviceElementFactory: EntityCollectionServiceElementsFactory) {
    super('Product', serviceElementFactory);


  }

}
