import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-footer',
  template: `
    <div class="footer">
      <span class="todo-count">
        <strong>{{ displayCount }} item left.</strong>
      </span>
      <ul class="filters">
        <li 
          (click)="changeFilter('All')"
        ><a>All</a></li>
        <li
          (click)="changeFilter('Active')"
        ><a>Active</a></li>
        <li
          (click)="changeFilter('Completed')"
        ><a>Completed</a></li>
      </ul>
      <button 
        class="clear-completed"
        (click)="clearAllCompleted()"
        *ngIf="canDisplayClearButton"
      >Clear completed</button>
    </div>
  `
})
export default class FooterComponent {
  @Input() displayCount
  @Input() changeFilter
  @Input() canDisplayClearButton
  @Input() clearAllCompleted
}
