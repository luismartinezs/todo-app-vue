<template>
  <div
    class="d-flex align-items-center justify-content-between border shadow-sm pl-4 pr-1 py-3 mb-2"
  >
    <div class="todo__checkbox mr-4 border border-primary d-flex text-center align-items-center justify-content-center">
      <font-awesome-icon icon="check" class="text-white"  />
    </div>
    <div class="todo__content">
      <h2 class="h5 mb-2">{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
    <div class="d-flex flex-column justify-content-center todo__options">
      <font-awesome-icon icon="edit" class="mb-2 text-muted" />
      <font-awesome-icon icon="trash-alt" class="text-muted" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDoItem',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
$checkbox-size: 44px;

.todo__checkbox,
.todo__options {
  width: 50px;
}
.todo__checkbox {
  height: $checkbox-size;
  width: $checkbox-size;
  border-radius: 50%;
}
.todo__content {
  flex-basis: 70%;
}
</style>
