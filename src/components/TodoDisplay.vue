<template>
  <div>
    <table>
      <tr>
        <th>ID</th>
        <th>コメント</th>
        <th>状態</th>
      </tr>
      <tr v-for="(todo, index) in displayTodos" :key="index">
        <td>{{ todo.id }}</td>
        <td>{{ todo.name }}</td>
        <button
          v-if="todo.completed === false"
          @click="toggleTodos(todo.id)"
          class="button-status"
        >
          作業中
        </button>
        <button
          v-else-if="todo.completed === true"
          @click="toggleTodos(todo.id)"
          class="button-status"
        >
          完了
        </button>
        <button @click="del(todo.id)" class="button-del">
          削除
        </button>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: mapGetters(['todos', 'displayTodos', 'type']),
  methods: {
    toggleTodos(id) {
      this.$store.dispatch('toggleTodos', id);
    },
    del(id) {
      this.$store.dispatch('del', id);
    },
  },
};
</script>
