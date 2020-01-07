import Vue from 'vue'
import Vuex from 'vuex'
import { getToDos, createToDo, editToDo, deleteToDo } from '@/services/api'

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
    setToDos: (state, toDo) => {
      const toDoIndex = state.toDos.reduce((acc, el, index) => {
        if (el.id === toDo.id) acc = index
        return acc
      }, null)
      state.toDos = state.toDos
        .slice(0, toDoIndex)
        .concat(toDo)
        .concat(state.toDos.slice(toDoIndex + 1))
    },
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
    addToDo: async ({ commit, dispatch }, toDo) => {
      try {
        await createToDo(toDo)
        dispatch('fetchToDos')
      } catch (err) {
        console.error(`We couldn't create the to-do. Error: ${err}`)
      }
    },
    editToDo: async ({ commit, dispatch }, toDo) => {
      try {
        await editToDo(toDo)
        dispatch('fetchToDos')
      } catch (err) {
        console.error(
          `We couldn't edit the to-do with id ${toDo.id}. Error: ${err}`
        )
      }
    },
    deleteToDo: async ({ commit, dispatch }, toDoId) => {
      try {
        await deleteToDo(toDoId)
        dispatch('fetchToDos')
      } catch (err) {
        console.error(
          `We couldn't delete the to-do with id ${toDoId}. Error: ${err}`
        )
      }
    }
  }
})
