<template>
  <div class="w-100">
    <to-do-list />
    <div
      v-show="!showAddToDo"
      class="d-flex flex-column justify-content-center align-items-center"
    >
      <div v-show="toDosCount === 0">Add a new task</div>
      <add-to-do-btn />
    </div>
    <div class="w-100" v-show="showAddToDo">
      <add-to-do />
    </div>
  </div>
</template>

<script>
import ToDoList from '@/components/ToDoList.vue'
import AddToDoBtn from '@/components/AddToDoBtn.vue'
import AddToDo from '@/components/AddToDo.vue'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'ViewLogin',
  components: {
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
