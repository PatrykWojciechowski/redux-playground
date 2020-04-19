import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app-state';
import { Client } from '../client.model';
import { getList, isError, isLoading } from '../client.selector';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent {
  clients$: Observable<Client[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.clients$ = this.store.select(getList);
    this.loading$ = this.store.select(isLoading);
  }
}
