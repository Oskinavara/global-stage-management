<template>
  <div class="app">
    <TheHeader @clear-list="clearList" />
    <InputForm @add-person="addPerson" />
    <PersonsList :persons="persons" />
  </div>
</template>

<script>
import PersonsList from "@/components/PersonsList";
import InputForm from "@/components/InputForm";
import TheHeader from "@/components/TheHeader";
export default {
  name: "App",
  components: {
    PersonsList,
    InputForm,
    TheHeader,
  },
  data() {
    return {
      persons: [
        { firstName: "John", lastName: "Doe", id: Math.random() },
        { firstName: "Elon", lastName: "Musk", id: Math.random() },
        { firstName: "Ferdynand", lastName: "Kiepski", id: Math.random() },
      ],
    };
  },
  methods: {
    clearList() {
      this.persons = [];
    },
    addPerson(data) {
      this.persons.push({
        firstName: data.firstName,
        lastName: data.lastName,
        id: Math.random(),
      });
    },
  },
};
</script>

<style>
.app {
  max-width: 600px;
  margin: 0 auto;
}

.header,
.input-form,
.persons-list {
  padding: 20px;
}
</style>
