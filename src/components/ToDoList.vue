<template>
  <ul class="d-flex flex-column justify-content-center align-items-center w-100">
    <to-do-item
      v-for="toDo in toDos"
      :key="toDo.id"
      :to-do="toDo"
    />
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
import ToDoItem from './ToDoItem'

export default {
  name: 'ToDoList',
  components: {
    ToDoItem
  },
  computed: {
    ...mapGetters({ toDos: 'getToDosOrderedById' })
  }
}
</script>
