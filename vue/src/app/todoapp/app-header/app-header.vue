<template>
  <div class="header">
    <h1>Vue todos</h1>
    <input type="text" class="new-todo" placeholder="enter your todo here."
    v-model="addInputValue"
    @keydown.13="onAddEvent()"
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      addInputValue: ''
    }
  },
  props: ['addTodo'],
  methods: {
    onAddEvent() {
      this.addTodo(this.addInputValue)
      this.addInputValue = ''
    }
  }
}
</script>
