<template>
  <div id="app">
    <!-- <font-awesome-icon icon="user-secret" /> -->
    <the-header />
    <div class="container mt-3">
      <div
        class="d-flex flex-column justify-content-center align-items-center w-100"
      >
        <to-do-list />
        <div v-show="!showAddToDo">
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
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    TheHeader,
    ToDoList,
    AddToDoBtn,
    AddToDo
  },
  computed: {
    ...mapState(['showAddToDo'])
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
