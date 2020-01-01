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
    getToDos: state => state.toDos
  },
  mutations: {
    setToDoStatus: (state, { id, done }) => {
      state.toDos = state.toDos.reduce((acc, toDo) => {
        if (toDo.id === id) toDo.done = done
        acc.push(toDo)
        return acc
      }, [])
    }
  },
  actions: {
    toggleToDoStatus: ({ commit, getters }, { id, done }) => {
      console.log('toggling status')
      commit('setToDoStatus', { id, done: !done })
    }
  }
})
