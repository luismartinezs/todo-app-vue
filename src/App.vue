<template>
  <div id="app">
    <!-- <font-awesome-icon icon="user-secret" /> -->
    <the-header />
    <to-do-list />
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
