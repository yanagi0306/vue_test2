<template>
  <div>
    <h2>タスクの追加</h2>
    <form>
      <input type="text" id="textbox" v-model="todoName" />
      <input type="button" id="add" value="追加" @click="addTodo" />
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todoName: '',
    };
  },

  methods: {
    addTodo() {
      if (this.todoName != '') {
        this.$store.dispatch('addTodo', this.todoName);
        this.todoName = '';
      }
    },
  },
};
</script>
