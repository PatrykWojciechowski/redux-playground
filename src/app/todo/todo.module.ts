import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { todoListReducer } from './reducer';
import { StoreModule } from '@ngrx/store';
import { Todo } from './todo.model';
import { ActionReducerMap } from '@ngrx/store/src/models';
import { TodoRoutingModuleModule } from './todo-routing-module.module';

export interface TodoState {
  list: Array<Todo>;
}

const reducer: ActionReducerMap<TodoState> = {
  list: todoListReducer,
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('todo', reducer),
    TodoRoutingModuleModule,
  ],
})
export class TodoModule {}
