<template>
  <div id="app">
    <todoapp
      v-bind:addTodo="addTodo"
      v-bind:toggleAllCompleted="toggleAllCompleted"
      v-bind:getShowTodos="getShowTodos"
      v-bind:deleteTodo="deleteTodo"
      v-bind:getUncompletedCount="getUncompletedCount"
      v-bind:changeFilter="changeFilter"
      v-bind:clearAllCompleted="clearAllCompleted"
      v-bind:getCanDisplayClearButton="getCanDisplayClearButton"
    ></todoapp>
    <info></info>
  </div>
</template>

<script src="./app.js">
</script>
