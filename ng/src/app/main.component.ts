import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-main',
  template: `
    <div class="main">
      <div>
        <input 
          type="checkbox" 
          class="toggle-all"
          (click)="toggleAllCompleted()"
        >
        <ul class="todo-list">
          <li 
            *ngFor="let todo of todos" 
            [ngClass]="{
              'todo': !todo.completed,
              'todo completed': todo.completed
            }"
          >
            <input 
              type="checkbox" 
              class="toggle"
              [checked]="todo.completed"
              (change)="toggleTodo(todo.key)"
            >
            <label>{{ todo.name }}</label>
            <button 
              class="destroy"
              (click)="deleteTodo(todo.key)"
            ></button>
          </li>
        </ul>
      </div>
    </div>
  `
})
export default class MainComponent {
  @Input() todos
  @Input() toggleTodo
  @Input() deleteTodo
  @Input() toggleAllCompleted
}
