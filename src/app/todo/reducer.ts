import { Todo } from './todo.model';
import { ADD_TODO, LOAD_TODO, REMOVE_TODO } from './todo.constants';

export function todoListReducer(state: Todo[] = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { ...action.payload }];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    case LOAD_TODO:
      return [...state, { ...action.payload }];
    default:
      return state;
  }
}
