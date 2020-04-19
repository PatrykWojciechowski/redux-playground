import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppState } from '../../app-state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../todo.model';
import { FormControl } from '@angular/forms';
import { addTodo, removeTodo } from '../todo-actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>;
  counter = 0;
  todoControl = new FormControl();

  constructor(private store: Store<AppState>) {
    this.todos$ = this.store.select((state) => {
      return state.todo.list;
    });
  }

  add() {
    this.store.dispatch(addTodo(this.counter++, this.todoControl.value));
  }

  remove(id: number) {
    this.store.dispatch(removeTodo(id));
  }

  ngOnInit(): void {}
}
