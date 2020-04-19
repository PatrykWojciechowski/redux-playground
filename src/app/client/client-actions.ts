import {
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
