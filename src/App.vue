<template>
  <div class="app">
    <TheHeader @clear-list="clearList" />
    <InputForm @add-person="addPerson" />
    <PersonsList :persons="persons" @remove-person="removePerson" />
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
    addPerson(person) {
      this.persons.push({
        firstName: person.firstName,
        lastName: person.lastName,
        id: Math.random(),
      });
    },
    removePerson(id) {
      this.persons = this.persons.filter((person) => person.id !== id);
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
