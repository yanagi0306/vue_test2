<template>
  <div>
    <All
      v-if="type === 'All'"
      :todos="todos"
      @statusChange="statusChange"
      @del="del"
      id="All"
    ></All>
    <Working
      v-else-if="type === 'Working'"
      :todos="todos"
      @statusChange="statusChange"
      @del="del"
      id="Working"
    ></Working>
    <Done
      v-else-if="type === 'Done'"
      :todos="todos"
      @statusChange="statusChange"
      @del="del"
      id="Done"
    ></Done>
  </div>
</template>

<script>
import All from './All.vue';
import Working from './Working.vue';
import Done from './Done.vue';

export default {
  components: {
    All,
    Working,
    Done,
  },
  props: {
    todos: {
      type: Array,
    },
    type: {
      type: String,
    },
  },
  methods: {
    statusChange(index) {
      this.$emit('statusChange', index);
    },
    del(index) {
      this.$emit('del', index);
    },
  },
};
</script>
