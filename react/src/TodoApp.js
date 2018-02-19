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
    ]
  }
  get filteredTodos () {
    const {
      filterType,
      todos
    } = this.state
    switch (filterType) {
      case 'Active':
        return todos.filter(x => !x.completed)
      case 'Completed':
        return todos.filter(x => x.completed)
      default:
        return todos
    }
  }
  get uncompletedCount () {
    return this.state.todos.filter(todo => !todo.completed).length
  }
  get canDisplayClearButton () {
    return this.state.todos.filter(todo => todo.completed).length > 0
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
      todos: newTodos
    })
  }
  toggleTodo = key => {
    const { todos, filterType } = this.state
    const target = todos.find(todo => todo.key === key)
    if (target) {
      target.completed = !target.completed
      this.setState({
        todos
      })
    }
  }
  deleteTodo = key => {
    const { todos, filterType } = this.state
    const targetIndex = todos.findIndex(todo => todo.key === key)
    if (targetIndex !== -1) {
      todos.splice(targetIndex, 1)
      this.setState({
        todos
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
      todos
    })
  }
  changeFilter = filterType => {
    const { todos } = this.state

    this.setState({
      filterType,
    })
  }
  clearAllCompleted = () => {
    const { todos, filterType } = this.state
    const newTodos = todos.filter(todo => !todo.completed)

    this.setState({
      todos: newTodos,
    })
  }
  render() {
    const { filteredTodos } = this.state
    return (
      <div className="todoapp">
        <Header addTodo={this.addTodo} />
        <Main
          todos={this.filteredTodos}
          toggleTodo={this.toggleTodo}
          deleteTodo={this.deleteTodo}
          toggleAllCompleted={this.toggleAllCompleted}
        />
        <Footer
          displayCount={this.uncompletedCount}
          changeFilter={this.changeFilter}
          canDisplayClearButton={this.canDisplayClearButton}
          clearAllCompleted={this.clearAllCompleted}
        />
      </div>
    )
  }
}

export default TodoApp
