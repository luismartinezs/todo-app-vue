<template>
  <div id="app">
    <!-- <font-awesome-icon icon="user-secret" /> -->
    <the-header />
    <div class="container mt-3">
    <to-do-list />
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import ToDoList from '@/components/ToDoList.vue'

export default {
  name: 'app',
  components: {
    TheHeader,
    ToDoList
  }
}
</script>

<style lang="scss">
@import './styles/variables.scss';

#app {
  font-family: $font-family-base;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
