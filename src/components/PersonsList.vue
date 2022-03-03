<template>
  <div class="persons-list">
    <PersonBlock
      v-for="person in persons"
      :key="person.id"
      :person="person"
      @remove-person="removePerson"
    />
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
  methods: {
    removePerson(id) {
      this.$emit("remove-person", id);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
