import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app-state';
import { Client } from '../client.model';
import { getList, isError, isLoading } from '../client.selector';
import { addClient, fetchClients } from '../client-actions';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent {
  clients$: Observable<Client[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  counter = 100;
  productControl = new FormControl();

  constructor(private store: Store<AppState>) {
    this.clients$ = this.store.select(getList);
    this.loading$ = this.store.select(isLoading);
    this.error$ = this.store.select(isError);
  }

  fetchClients() {
    this.store.dispatch(fetchClients());
  }

  addNewClient() {
    this.store.dispatch(
      addClient({
        id: this.counter++,
        name: this.productControl.value,
      } as Client)
    );
  }
}
