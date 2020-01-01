<template>
  <ul class="d-flex flex-column justify-content-center align-items-center w-100">
    <to-do-item
      v-for="{ id, title, description, done } in toDos"
      :key="id"
      :title="title"
      :description="description"
      :done="done"
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
    ...mapGetters({ toDos: 'getToDos' })
  }
}
</script>
