import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toDos: [
      {
        id: 1,
        title: 'Do the laundry',
        description: '',
        done: false
      },
      {
        id: 2,
        title: 'Study',
        description: 'Read the biology book and take notes',
        done: true
      }
    ]
  },
  getters: {
    getToDos: (state) => state.toDos
  },
  mutations: {
  },
  actions: {

  }
})
