<template>
  <div>
    <h2>ToDoリスト</h2>
    <todo-filter></todo-filter>
    <todo-display></todo-display>
    <todo-input></todo-input>
  </div>
</template>

<script>
import todoInput from './components/TodoInput.vue';
import todoFilter from './components/TodoFilter.vue';
import TodoDisplay from './components/TodoDisplay.vue';

export default {
  components: {
    todoInput,
    todoFilter,
    TodoDisplay,
  },
};
</script>
