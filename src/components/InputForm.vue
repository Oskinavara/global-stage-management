<template>
  <div class="input-form">
    <input placeholder="First name" v-model="firstName" type="text" />
    <input placeholder="Last name" v-model="lastName" type="text" />
    <button @click="newPerson">Add person</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
    };
  },
  methods: {
    ...mapActions(['addPerson']),
    newPerson() {
      this.addPerson({
        firstName: this.firstName,
        lastName: this.lastName,
      })
      this.firstName = "";
      this.lastName = "";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
