import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <div class="todoapp">
      <app-header 
        [addTodo]="addTodo"
      ></app-header>
      <app-main
        [todos]="filteredTodos"
        [toggleTodo]="toggleTodo"
        [deleteTodo]="deleteTodo"
        [toggleAllCompleted]="toggleAllCompleted"
      ></app-main>
      <app-footer
        [displayCount]="uncompletedCount"
        [changeFilter]="changeFilter"
        [canDisplayClearButton]="canDisplayClearButton"
        [clearAllCompleted]="clearAllCompleted"
      ></app-footer>
    </div>
    <app-info></app-info>
  `
})
export class AppComponent {
  filterType = 'All'
  todos = [
    {
      key: 0,
      name: 'todo1',
      completed: false
    },
    {
      key: 1,
      name: 'todo2',
      completed: true
    }
  ]
  get filteredTodos () {
    switch (this.filterType) {
      case 'Active':
        return this.todos.filter(x => !x.completed)
      case 'Completed':
        return this.todos.filter(x => x.completed)
      default:
        return this.todos
    }
  }
  get uncompletedCount () {
    return this.todos.filter(todo => !todo.completed).length
  }
  get canDisplayClearButton () {
    return this.todos.filter(todo => todo.completed).length > 0
  }
  addTodo = name => {
    if (!name.trim()) {
      return false
    }
    const newTodos = [
      ...this.todos,
      {
        key: this.todos[this.todos.length - 1].key + 1,
        name: name.trim(),
        completed: false
      }
    ]
    
    this.todos = newTodos
  }
  toggleTodo = key => {
    const target = this.todos.find(todo => todo.key === key)
    if (target) {
      target.completed = !target.completed
    }
  }
  deleteTodo = key => {
    const targetIndex = this.todos.findIndex(todo => todo.key === key)
    if (targetIndex !== -1) {
      this.todos.splice(targetIndex, 1)
    }
  }
  toggleAllCompleted = () => {
    const target = this.todos.filter(x => x.completed === false)

    let flag = false
    if (target.length > 0) flag = true
    this.todos.map(todo => {
      todo.completed = flag
    })
  }
  changeFilter = filterType => {
    this.filterType = filterType
  }
  clearAllCompleted = () => {
    this.todos = this.todos.filter(todo => !todo.completed)
  }
}
