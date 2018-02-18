import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-header',
  template: `
  <div class="header">
    <div><h1>{{ title }}</h1></div>
    <input 
      type="text" 
      placeholder="enter your todo here." 
      class="new-todo"
      [value]="inputValue"
      (input)="inputValue = $event.target.value"
      (keydown)="onKey($event)"
    >
  </div>
  `
})
export default class HeaderComponent {
  @Input() addTodo
  title = 'Ng todos'
  inputValue = ''
  onKey = ({ keyCode }) => {
    switch (keyCode) {
      case 13:
        if (this.inputValue.trim()) {
          this.addTodo(this.inputValue.trim())
        }
        this.inputValue = ''
        break
    }
  }
}
