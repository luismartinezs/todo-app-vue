<template>
  <li
    class="d-flex align-items-center justify-content-between border shadow-sm pl-4 pr-1 py-3 mb-2 w-100 todo"
  >
    <div class="w-100 mr-3" :class="{ hide: !showEditForm }">
      <edit-to-do :to-do="toDo" @closeEditToDo="hideEditForm" />
    </div>
    <div
      :class="{ hide: showEditForm }"
      class="d-flex align-items-center justify-content-between w-100"
    >
      <button
        class="todo__checkbox mr-4 border border-primary d-flex text-center align-items-center justify-content-center"
        :class="{ 'todo__checkbox--done': toDo.done }"
        @click="handleCheckboxClick"
      >
        <font-awesome-icon
          v-show="toDo.done"
          icon="check"
          class="text-white todo__checkmark"
        />
      </button>
      <div class="mr-3 todo__content">
        <h2 class="h5 mb-2 to-do__title">{{ toDo.title }}</h2>
        <p class="to-do__description">{{ toDo.description }}</p>
      </div>
      <div class="d-flex flex-column justify-content-center todo__options">
        <font-awesome-icon
          @click="handleEdit"
          icon="edit"
          class="mb-3 text-muted to-do__btn to-do__edit"
        />
        <font-awesome-icon
          @click="handleDelete"
          icon="trash-alt"
          class="text-muted to-do__btn to-do__delete"
        />
      </div>
    </div>
  </li>
</template>

<script>
import { mapActions } from 'vuex'
import EditToDo from './EditToDo'

export default {
  name: 'ToDoItem',
  components: { EditToDo },
  data () {
    return {
      showEditForm: false
    }
  },
  props: {
    toDo: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(['toggleToDoStatus', 'deleteToDo']),
    handleCheckboxClick () {
      this.toggleToDoStatus({ id: this.toDo.id, done: !this.toDo.done })
    },
    handleDelete () {
      this.deleteToDo(this.toDo.id)
    },
    handleEdit () {
      this.showEditForm = true
    },
    hideEditForm () {
      this.showEditForm = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
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
  &:focus,
  &:hover {
    outline: none;
    box-shadow: 0 0 10px 5px rgba(38, 198, 218, 0.2);
  }
}
.todo__checkbox--done {
  background-color: $primary;
}
.todo__content {
  flex-basis: 70%;
}
.to-do__btn {
  cursor: pointer;
}

.hide {
  display: none !important;
}
</style>
