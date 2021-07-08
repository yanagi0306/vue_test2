<template>
  <div>
    <form>
      <input
        type="radio"
        name="status"
        id="All"
        @click="changeFilter('All')"
        checked
      />
      <label>すべて</label>
      <input
        type="radio"
        name="status"
        id="Working"
        @click="changeFilter('Working')"
      />
      <label>作業中</label>
      <input
        type="radio"
        name="status"
        id="Done"
        @click="changeFilter('Done')"
      />
      <label>完了</label>
    </form>
  </div>
</template>
<script>
export default {
  methods: {
    changeFilter(type) {
      this.$store.dispatch('changeFilter', type);
    },
  },
};
</script>
