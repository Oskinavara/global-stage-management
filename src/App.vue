<template>
  <div class="app">
    <TheHeader />
    <InputForm />
    <PersonsList />
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
