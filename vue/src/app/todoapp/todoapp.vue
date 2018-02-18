<template>
  <div class="todoapp">
    <app-header 
      v-bind:addTodo="addTodo"
    ></app-header>
    <app-main
      v-bind:toggleAllCompleted="toggleAllCompleted"
      v-bind:getShowTodos="getShowTodos"
      v-bind:deleteTodo="deleteTodo"
    ></app-main>
    <app-footer
      v-bind:getUncompletedCount="getUncompletedCount"
      v-bind:changeFilter="changeFilter"
      v-bind:clearAllCompleted="clearAllCompleted"
      v-bind:getCanDisplayClearButton="getCanDisplayClearButton"
    ></app-footer>
  </div>
</template>

<script>
import appHeader from './app-header/app-header'
import appMain from './app-main/app-main'
import appFooter from './app-footer/app-footer'
export default {
  comments: {
    appHeader,
    appMain,
    appFooter
  },
  props: [
    'addTodo',
    'toggleAllCompleted',
    'getShowTodos',
    'deleteTodo',
    'getUncompletedCount',
    'changeFilter',
    'clearAllCompleted',
    'getCanDisplayClearButton'
  ]
}
</script>
