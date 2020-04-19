import { AppState } from '../app-state';

export const getList = (state: AppState) => state.featureClient.clients.list;
export const isLoading = (state: AppState) =>
  state.featureClient.clients.loading;
export const isError = (state: AppState) => state.featureClient.clients.error;
