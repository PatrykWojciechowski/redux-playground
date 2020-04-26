import { ADD_TODO, LOAD_TODO, REMOVE_TODO } from '../todo/todo.constants';
import { ClientState } from './client-state';
import { ActionReducerMap } from '@ngrx/store/src/models';
import {
  ADD_CLIENT,
  ADD_CLIENT_ERROR,
  ADD_CLIENT_SUCCESSFULLY,
  FETCHING_CLIENTS,
  FETCHING_CLIENTS_ERROR,
  FETCHING_CLIENTS_SUCCESSFULLY,
} from './client.contants';
import { Client } from './client.model';

export const initialClientState: ClientState = {
  loading: false,
  list: [],
  error: undefined,
};

export interface FeatureClient {
  clients: ClientState;
}

export const clientReducers: ActionReducerMap<FeatureClient> = {
  clients: clientListReducer,
};

function addClient(list: Client[], client: Client) {
  return [...list, client];
}

export function clientListReducer(
  state: ClientState = initialClientState,
  action
): ClientState {
  switch (action.type) {
    case FETCHING_CLIENTS:
      return { ...state, loading: true };
    case FETCHING_CLIENTS_SUCCESSFULLY:
      return { ...state, list: action.payload, loading: false };
    case FETCHING_CLIENTS_ERROR:
      return { ...state, error: action.payload, loading: false };
    case ADD_CLIENT:
      return { ...state, loading: true };
    case ADD_CLIENT_SUCCESSFULLY:
      return {
        ...state,
        list: addClient(state.list, action.payload),
        loading: false,
      };
    case ADD_CLIENT_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}
