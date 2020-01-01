<template>
  <li
    class="d-flex align-items-center justify-content-between border shadow-sm pl-4 pr-1 py-3 mb-2 w-100 todo"
  >
    <button
      class="todo__checkbox mr-4 border border-primary d-flex text-center align-items-center justify-content-center"
      :class="{ 'todo__checkbox--done': done }"
      @click="handleCheckboxClick"
    >
      <font-awesome-icon v-show="done" icon="check" class="text-white" />
    </button>
    <div class="mr-3 todo__content">
      <h2 class="h5 mb-2">{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
    <div class="d-flex flex-column justify-content-center todo__options">
      <font-awesome-icon icon="edit" class="mb-2 text-muted" />
      <font-awesome-icon icon="trash-alt" class="text-muted" />
    </div>
  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ToDoItem',
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    done: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    ...mapActions(['toggleToDoStatus']),
    handleCheckboxClick () {
      this.toggleToDoStatus({ id: this.id, done: this.done })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@use "sass:color";
$checkbox-size: 44px;

.todo {
  max-width: 700px;
}
.todo__checkbox,
.todo__options {
  width: 50px;
}
.todo__checkbox {
  height: $checkbox-size;
  width: $checkbox-size;
  border-radius: 50%;
  background-color: transparent;
  transition: all 0.3s;
  box-shadow: none;
  &:focus {
    outline: none;
    box-shadow: 0 0 10px 5px rgba(38,198,218,0.2);
  }
}
.todo__checkbox--done {
  background-color: $primary;
}
.todo__content {
  flex-basis: 70%;
}
</style>
