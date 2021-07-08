<template>
  <div>
    <h2>タスクの追加</h2>
    <form>
      <input type="text" class="textbox" v-model="todo" />
      <input type="button" class="button-add" value="追加" @click="addTodo" />
    </form>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      todo: '',
    };
  },
  computed: mapGetters(['todos']),
  methods: {
    addTodo() {
      if (this.todo != '') {
        this.$store.dispatch('addTodo', {
          name: this.todo,
          completed: false,
          id: this.todos.length,
        });
        this.todo = '';
      }
    },
  },
};
</script>
