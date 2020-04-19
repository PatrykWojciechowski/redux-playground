import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { FETCHING_CLIENTS } from './client.contants';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Client } from './client.model';
import { fetchClientsError, fetchClientsSuccessfully } from './client-actions';

const GET_CLIENTS_API_URL = 'http://localhost:3000/clients';

@Injectable()
export class ClientEffects {
  @Effect() clients$ = this.actions$.pipe(
    ofType(FETCHING_CLIENTS),
    switchMap((action) =>
      this.http.get<Client[]>(GET_CLIENTS_API_URL).pipe(
        map((clients) => fetchClientsSuccessfully(clients)),
        catchError((error) => of(fetchClientsError(error)))
      )
    )
  );

  constructor(private actions$: Actions<Action>, private http: HttpClient) {}
}
