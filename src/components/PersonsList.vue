<template>
  <div class="persons-list">
    <PersonBlock
      v-for="person in persons"
      :key="person.id"
      :person="person"
    />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import PersonBlock from "./PersonBlock";
export default {
  components: {
    PersonBlock,
  },
  computed: {
    ...mapGetters(['persons']),
  },
};
</script>

<style lang="scss" scoped>
</style>
