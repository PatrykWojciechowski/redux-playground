import { TodoState } from './todo/todo.module';
import { FeatureClient } from './client/client.reducer';

export interface AppState {
  todo: TodoState;
  featureClient: FeatureClient;
}
