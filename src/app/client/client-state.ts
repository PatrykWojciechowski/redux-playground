import { Todo } from '../todo/todo.model';
import { Client } from './client.model';

export interface ClientState {
  loading: boolean;
  list: Array<Client>;
  error: string;
}
