import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    persons: [
      { firstName: "John", lastName: "Doe", id: Math.random() },
      { firstName: "Elon", lastName: "Musk", id: Math.random() },
      { firstName: "Ferdynand", lastName: "Kiepski", id: Math.random() },
    ],
  },
  mutations: {
    clearList(state) {
      state.persons = [];
    },
    addPerson(state, payload) {
      state.persons.push({
        firstName: payload.firstName,
        lastName: payload.lastName,
        id: Math.random(),
      });
    },
    removePerson(state, id) {
      state.persons = state.persons.filter((person) => person.id !== id);
    },
  },
  actions: {
    clearList({commit}){
      commit('clearList');
    },
    addPerson({commit}, payload){
      commit('addPerson', payload)
    },
    removePerson({commit}, payload){
      commit('removePerson', payload)
    }
  },
  getters: {
    persons: state => state.persons
  },
  modules: {
  }
})
