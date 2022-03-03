<template>
  <header class="header">
    <HeaderActions @clear-list="clearList" />
  </header>
</template>

<script>
import HeaderActions from "./HeaderActions";
export default {
  components: {
    HeaderActions,
  },
  methods: {
    clearList() {
      this.$emit("clear-list");
    },
  },
};
</script>

<style scoped>
</style>
