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
export default {
  data() {
    return {
      todo: '',
    };
  },
  methods: {
    addTodo() {
      if (this.todo != '') {
        this.$emit('addTodo', this.todo);
        this.todo = '';
      }
    },
  },
};
</script>
