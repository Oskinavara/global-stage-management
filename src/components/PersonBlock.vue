<template>
  <div class="person-block">
    <span>{{ person.firstName }}</span>
    <span>{{ person.lastName }}</span>
  </div>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.person-block {
  padding: 4px 0;
}
span {
  margin-right: 4px;
}
</style>
