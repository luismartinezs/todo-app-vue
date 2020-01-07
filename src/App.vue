<template>
  <div id="app">
    <!-- <font-awesome-icon icon="user-secret" /> -->
    <the-header />
    <div class="container mt-3">
      <div
        class="d-flex flex-column justify-content-center align-items-center w-100"
      >
        <to-do-list />
        <div v-show="!showAddToDo" class="d-flex flex-column justify-content-center align-items-center">
          <div v-show="toDosCount === 0">Add a new task</div>
          <add-to-do-btn />
        </div>
        <div class="w-100" v-show="showAddToDo">
          <add-to-do />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import ToDoList from '@/components/ToDoList.vue'
import AddToDoBtn from '@/components/AddToDoBtn.vue'
import AddToDo from '@/components/AddToDo.vue'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    TheHeader,
    ToDoList,
    AddToDoBtn,
    AddToDo
  },
  computed: {
    ...mapState(['showAddToDo']),
    ...mapGetters({ toDosCount: 'getToDosCount' })
  },
  methods: {
    ...mapActions(['fetchToDos'])
  },
  mounted () {
    this.fetchToDos()
  }
}
</script>

<style lang="scss">
@import "./styles/variables.scss";

#app {
  font-family: $font-family-base;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
