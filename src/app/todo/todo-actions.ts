import { ADD_TODO, LOAD_TODO, REMOVE_TODO } from './todo.constants';

export const addTodo = (id: number, task: string) => ({
  type: ADD_TODO,
  payload: { id: id, task: task },
});
export const removeTodo = (id) => ({ type: REMOVE_TODO, payload: id });
export const loadTodo = (tasks) => ({ type: LOAD_TODO, payload: tasks });
