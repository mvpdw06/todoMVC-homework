<template>
  <div class="footer">
    <span class="todo-count">{{getUncompletedCount}} item left.</span>
    <ul class="filters">
      <li v-on:click="changeFilter('All')"><a>All</a></li>
      <li v-on:click="changeFilter('Active')"><a>Active</a></li>
      <li v-on:click="changeFilter('Completed')"><a>Completed</a></li>
    </ul>
    <button class="clear-completed" v-if="getCanDisplayClearButton" v-on:click="clearAllCompleted()">Clear completed</button>
  </div>
</template>

<script>
export default {
  props: [
    'getUncompletedCount',
    'changeFilter',
    'clearAllCompleted',
    'getCanDisplayClearButton'
  ]
}
</script>
