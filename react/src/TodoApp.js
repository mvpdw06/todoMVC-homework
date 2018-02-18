import React, { Component } from 'react'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

class TodoApp extends Component {
  state = {
    filterType: 'All',
    todos: [
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
    ],
    showTodos: [
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
  }
  addTodo = name => {
    const { todos, filterType } = this.state
    const newTodos = [
      ...todos,
      {
        key: todos[todos.length - 1].key + 1,
        name,
        completed: false
      }
    ]
    this.setState({
      todos: newTodos,
      showTodos: this.filterTodos(newTodos, filterType)
    })
  }
  toggleTodo = key => {
    const { todos, filterType } = this.state
    const target = todos.find(todo => todo.key === key)
    if (target) {
      target.completed = !target.completed
      this.setState({
        todos,
        showTodos: this.filterTodos(todos, filterType)
      })
    }
  }
  deleteTodo = key => {
    const { todos, filterType } = this.state
    const targetIndex = todos.findIndex(todo => todo.key === key)
    if (targetIndex !== -1) {
      todos.splice(targetIndex, 1)
      this.setState({
        todos,
        showTodos: this.filterTodos(todos, filterType)
      })
    }
  }
  toggleAllCompleted = () => {
    const { todos, filterType } = this.state
    const target = todos.filter(x => x.completed === false)

    let flag = false
    if (target.length > 0) flag = true
    todos.map(todo => {
      todo.completed = flag
    })

    this.setState({
      todos,
      showTodos: this.filterTodos(todos, filterType)
    })
  }
  getUncompletedCount = () => {
    const { todos } = this.state
    return todos.filter(todo => !todo.completed).length
  }
  changeFilter = filterType => {
    const { todos, showTodos } = this.state

    this.setState({
      filterType,
      showTodos: this.filterTodos(todos, filterType)
    })
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
    const { todos, filterType } = this.state
    const newTodos = todos.filter(todo => !todo.completed)

    this.setState({
      todos: newTodos,
      showTodos: this.filterTodos(newTodos, filterType)
    })
  }
  getCanDisplayClearButton = () => {
    const { todos } = this.state
    return todos.filter(todo => todo.completed).length > 0
  }
  render() {
    const { showTodos } = this.state
    return (
      <div className="todoapp">
        <Header addTodo={this.addTodo} />
        <Main
          todos={showTodos}
          toggleTodo={this.toggleTodo}
          deleteTodo={this.deleteTodo}
          toggleAllCompleted={this.toggleAllCompleted}
        />
        <Footer
          displayCount={this.getUncompletedCount()}
          changeFilter={this.changeFilter}
          canDisplayClearButton={this.getCanDisplayClearButton()}
          clearAllCompleted={this.clearAllCompleted}
        />
      </div>
    )
  }
}

export default TodoApp
