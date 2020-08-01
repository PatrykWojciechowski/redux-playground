import {Injectable} from "@angular/core";
import {DefaultDataService, HttpUrlGenerator} from "@ngrx/data";
import {Product} from "./product.model";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";

const GET_CLIENTS_API = 'http://localhost:3000/products';

@Injectable()
export class ProductsDataService extends DefaultDataService<Product> {

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator ) {
    super('Product', http, httpUrlGenerator);
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(GET_CLIENTS_API);
  }


}
