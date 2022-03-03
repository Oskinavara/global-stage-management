<template>
  <div class="persons-list">
    <PersonBlock v-for="person in persons" :key="person.id" :person="person" />
  </div>
</template>

<script>
import PersonBlock from "./PersonBlock";
export default {
  components: {
    PersonBlock,
  },
  props: {
    persons: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
