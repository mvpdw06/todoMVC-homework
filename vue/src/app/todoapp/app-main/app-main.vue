<template>
  <div class="main">
    <input type="checkbox" class="toggle-all" v-on:click="toggleAllCompleted()">
    <ul class="todo-list">
      <li v-for="todo in getShowTodos" 
          v-bind:class="{ 
            'todo': !todo.completed, 
            'todo completed': todo.completed 
          }"
          :key="todo.key" >
        <input type="checkbox" class="toggle" v-model="todo.completed">
        <label>{{ todo.name }}</label>
        <button class="destroy" v-on:click="deleteTodo(todo.key)"></button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['toggleAllCompleted', 'getShowTodos', 'deleteTodo']
}
</script>
