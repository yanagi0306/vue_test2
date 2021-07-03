<template>
  <div>
    <h2>ToDoリスト</h2>
    <todo-filter @changeFilter="changeFilter"></todo-filter>
    <todo-display
      :todos="todos"
      :type="type"
      @statusChange="statusChange"
      @del="del"
    ></todo-display>
    <todo-input @addTodo="addTodo"></todo-input>
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
  data() {
    return {
      todos: [],
      type: 'All',
    };
  },
  methods: {
    addTodo(todo) {
      this.todos.push({
        name: todo,
        status: 1,
      });
    },
    changeFilter(type) {
      this.type = type;
    },
    statusChange(index) {
      this.todos[index].status++;
    },
    del(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>
