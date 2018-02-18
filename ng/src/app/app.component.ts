import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <div class="todoapp">
      <app-header 
        [addTodo]="addTodo"
      ></app-header>
      <app-main
        [todos]="showTodos"
        [toggleTodo]="toggleTodo"
        [deleteTodo]="deleteTodo"
        [toggleAllCompleted]="toggleAllCompleted"
      ></app-main>
      <app-footer
        [displayCount]="getUncompletedCount()"
        [changeFilter]="changeFilter"
        [canDisplayClearButton]="getCanDisplayClearButton()"
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
  showTodos = [
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
    this.showTodos = this.filterTodos(newTodos, this.filterType)
  }
  toggleTodo = key => {
    const target = this.todos.find(todo => todo.key === key)
    if (target) {
      target.completed = !target.completed
      this.showTodos = this.filterTodos(this.todos, this.filterType)
    }
  }
  deleteTodo = key => {
    const targetIndex = this.todos.findIndex(todo => todo.key === key)
    if (targetIndex !== -1) {
      this.todos.splice(targetIndex, 1)
      this.showTodos = this.filterTodos(this.todos, this.filterType)
    }
  }
  toggleAllCompleted = () => {
    const target = this.todos.filter(x => x.completed === false)

    let flag = false
    if (target.length > 0) flag = true
    this.todos.map(todo => {
      todo.completed = flag
    })

    this.showTodos = this.filterTodos(this.todos, this.filterType)
  }
  changeFilter = filterType => {
    this.filterType = filterType

    this.showTodos = this.filterTodos(this.todos, this.filterType)
  }
  filterTodos = (todos, filterType) => {
    let showTodos = []
    switch (filterType) {
      case 'Active':
        showTodos = todos.filter(x => !x.completed)
        break
      case 'Completed':
        showTodos = todos.filter(x => x.completed)
        break
      default:
        showTodos = todos
        break
    }
    return showTodos
  }
  clearAllCompleted = () => {
    const newTodos = this.todos.filter(todo => !todo.completed)

    this.todos = newTodos
    this.showTodos = this.filterTodos(newTodos, this.filterType)
  }
  getUncompletedCount = () => {
    return this.todos.filter(todo => !todo.completed).length
  }
  getCanDisplayClearButton = () => {
    return this.todos.filter(todo => todo.completed).length > 0
  }
}
