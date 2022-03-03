<template>
  <div class="input-form">
    <input placeholder="First name" v-model="firstName" type="text" />
    <input placeholder="Last name" v-model="lastName" type="text" />
    <button @click="addPerson">Add person</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
    };
  },
  methods: {
    addPerson() {
      this.$emit("add-person", {
        firstName: this.firstName,
        lastName: this.lastName,
      });
      this.firstName = "";
      this.lastName = "";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
