<template>
  <div class="person-block">
    <span>{{ person.firstName }}</span>
    <span>{{ person.lastName }}</span>
    <button @click="removePerson">
      <img src="@/assets/trash-solid.svg" alt="" />
    </button>
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
  methods: {
    removePerson() {
      this.$emit("remove-person", this.person.id);
    },
  },
};
</script>

<style scoped>
.person-block {
  padding: 4px 0;
  display: flex;
  align-items: center;
}
span {
  margin-right: 4px;
}
img {
  width: 24px;
}
button {
  background: transparent;
  border: none;
  cursor: pointer;
}
</style>
