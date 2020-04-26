import {
  ADD_CLIENT,
  ADD_CLIENT_ERROR,
  ADD_CLIENT_SUCCESSFULLY,
  FETCHING_CLIENTS,
  FETCHING_CLIENTS_ERROR,
  FETCHING_CLIENTS_SUCCESSFULLY,
} from './client.contants';

export const fetchClients = () => ({
  type: FETCHING_CLIENTS,
});
export const fetchClientsSuccessfully = (clients) => ({
  type: FETCHING_CLIENTS_SUCCESSFULLY,
  payload: clients,
});
export const fetchClientsError = (error) => ({
  type: FETCHING_CLIENTS_ERROR,
  payload: error,
});
export const addClient = (client) => ({
  type: ADD_CLIENT,
  payload: client,
});
export const addClientSuccessfully = (client) => ({
  type: ADD_CLIENT_SUCCESSFULLY,
  payload: client,
});
export const addClientError = (error) => ({
  type: ADD_CLIENT_ERROR,
  payload: error,
});
