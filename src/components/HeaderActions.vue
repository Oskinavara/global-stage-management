<template>
  <div>
    <button @click="clearList">Clear List</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  methods: {
    ...mapActions(['clearList']),
  },
};
</script>

<style lang="scss" scoped>
</style>
