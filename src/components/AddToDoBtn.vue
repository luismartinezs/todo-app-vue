<template>
  <b-button pill class="mt-2 add-todo-btn" @click="toggleShowAddToDo">
    <span class="h4">+</span>
  </b-button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddToDoBtn',
  methods: {
    ...mapActions(['toggleShowAddToDo'])
  }
}
</script>

<style lang="scss" scoped>
$btn-size: 44px;

.add-todo-btn {
  width: $btn-size;
  height: $btn-size;
}
</style>
