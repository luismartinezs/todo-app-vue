<template>
  <ul>
    <to-do-item
      v-for="{ id, title, description } in toDos"
      :key="id"
      :title="title"
      :description="description"
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
