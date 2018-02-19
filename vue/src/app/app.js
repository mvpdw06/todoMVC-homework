import todoapp from './todoapp/todoapp'
import info from './info/info'

export default {
  comments: {
    todoapp,
    info
  },
  data() {
    return {
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
  },
  computed: {
    getUncompletedCount() {
      return this.todos.filter(todo => !todo.completed).length
    },
    getShowTodos() {
      let showTodos = []
      switch (this.filterType) {
        case 'Active':
          showTodos = this.todos.filter(x => !x.completed)
          break
        case 'Completed':
          showTodos = this.todos.filter(x => x.completed)
          break
        default:
          showTodos = this.todos
          break
      }
      return showTodos
    },
    getCanDisplayClearButton() {
      return this.todos.filter(todo => todo.completed).length > 0
    }
  },
  methods: {
    addTodo(name) {
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
    },
    toggleTodo(key) {
      const target = this.todos.find(todo => todo.key === key)
      if (target) {
        target.completed = !target.completed
        // this.todos = todos;
      }
    },
    deleteTodo(key) {
      const targetIndex = this.todos.findIndex(todo => todo.key === key)
      if (targetIndex !== -1) {
        this.todos.splice(targetIndex, 1)
      }
    },
    toggleAllCompleted() {
      const target = this.todos.filter(x => x.completed === false)

      let flag = false
      if (target.length > 0) flag = true
      this.todos.map(todo => {
        todo.completed = flag
      })
    },
    changeFilter(filterType) {
      this.filterType = filterType
    },
    clearAllCompleted() {
      const newTodos = this.todos.filter(todo => !todo.completed)

      this.todos = newTodos
    }
  }
}
