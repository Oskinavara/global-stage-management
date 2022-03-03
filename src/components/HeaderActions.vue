<template>
  <div>
    <button @click="clearList">Clear List</button>
  </div>
</template>

<script>
export default {
  methods: {
    clearList() {
      this.$emit('clear-list');
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
