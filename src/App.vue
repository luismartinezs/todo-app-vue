<template>
  <div id="app">
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

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
