import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { ADD_CLIENT, FETCHING_CLIENTS } from './client.contants';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Client } from './client.model';
import {
  addClientError,
  addClientSuccessfully,
  fetchClientsError,
  fetchClientsSuccessfully,
} from './client-actions';

const CLIENTS_API_URL = 'http://localhost:3000/clients';

export interface ActionWithPayload<T> extends Action {
  payload: T;
}

@Injectable()
export class ClientEffects {
  @Effect() getClients$: Observable<Action> = this.actions$.pipe(
    ofType(FETCHING_CLIENTS),
    switchMap((action) =>
      this.http.get<Client[]>(CLIENTS_API_URL).pipe(
        map((clients) => fetchClientsSuccessfully(clients)),
        catchError((error) => of(fetchClientsError(error)))
      )
    )
  );
  // @ts-ignore
  @Effect() addClient$: Observable<Action> = this.actions$.pipe(
    ofType<ActionWithPayload<Client>>(ADD_CLIENT),
    map((action) => action.payload),
    switchMap((payload) =>
      this.http.post(CLIENTS_API_URL, payload).pipe(
        map((clients) => addClientSuccessfully(clients)),
        catchError((error) => of(addClientError(error)))
      )
    )
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
