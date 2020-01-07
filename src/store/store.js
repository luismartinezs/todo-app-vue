import Vue from 'vue'
import Vuex from 'vuex'
import { getToDos } from '@/services/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toDos: [],
    showAddToDo: false
  },
  getters: {
    getToDos: state => state.toDos,
    getToDosCount: state => state.toDos.length
  },
  mutations: {
    setToDoStatus: (state, { id, done }) => {
      state.toDos = state.toDos.reduce((acc, toDo) => {
        if (toDo.id === id) toDo.done = done
        acc.push(toDo)
        return acc
      }, [])
    },
    setShowAddToDo: state => {
      state.showAddToDo = !state.showAddToDo
    },
    setNewToDo: (state, toDo) => {
      const nextId = state.toDos.reduce((acc, toDo) => {
        if (toDo.id >= acc) acc = toDo.id + 1
        return acc
      }, 0)
      state.toDos.push({ ...toDo, id: nextId })
    },
    setToDo: (state, toDo) => {
      const toDoIndex = state.toDos.reduce((acc, el, index) => {
        if (el.id === toDo.id) acc = index
        return acc
      }, null)
      state.toDos = state.toDos
        .slice(0, toDoIndex)
        .concat(toDo)
        .concat(state.toDos.slice(toDoIndex + 1))
    },
    setToDos: (state, toDos) => (state.toDos = toDos),
    setDeleteToDo: (state, id) => {
      state.toDos = state.toDos.filter(toDo => toDo.id !== id)
    }
  },
  actions: {
    toggleToDoStatus: ({ commit, getters }, { id, done }) => {
      commit('setToDoStatus', { id, done: !done })
    },
    toggleShowAddToDo: ({ commit }) => {
      commit('setShowAddToDo')
    },
    fetchToDos: async ({ commit }) => {
      try {
        const toDos = await getToDos()
        commit('setToDos', toDos)
      } catch (err) {
        console.error(`We couldn't fetch the to-dos. Error: ${err}`)
      }
    },
    addToDo: ({ commit }, toDo) => {
      commit('setNewToDo', toDo)
    },
    editToDo: ({ commit }, toDo) => {
      commit('setToDo', toDo)
    },
    deleteToDo: ({ commit }, id) => {
      commit('setDeleteToDo', id)
    }
  }
})
