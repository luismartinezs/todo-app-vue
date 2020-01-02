<template>
  <div class="d-flex align-items-center justify-content-between w-100 edit-to-do">
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset" class="w-100">
      <b-form-group
        :id="`input-group-${toDo.id}-1`"
        label="Title*:"
        :label-for="`input-${toDo.id}-1`"
      >
        <b-form-input
          :id="`input-${toDo.id}-1`"
          class="input-edit-1"
          v-model="currentToDo.title"
          type="text"
          required
          placeholder="Enter title"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        :id="`input-group-${toDo.id}-2`"
        label="Description:"
        :label-for="`input-${toDo.id}-2`"
      >
        <b-form-input
          :id="`input-${toDo.id}-2`"
          class="input-edit-2"
          v-model="currentToDo.description"
          type="text"
          placeholder="Enter description (optional)"
        ></b-form-input>
      </b-form-group>
      <div class="d-flex justify-content-end">
        <b-button type="reset" variant="danger" class="mr-1">Cancel</b-button>
        <b-button type="submit" variant="primary" class="ok-edit-button">OK</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'EditToDo',
  props: {
    toDo: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      currentToDo: {
        title: this.toDo.title,
        description: this.toDo.description
      }
    }
  },
  methods: {
    ...mapActions(['editToDo']),
    onSubmit (evt) {
      this.editToDo({
        ...this.toDo,
        title: this.currentToDo.title,
        description: this.currentToDo.description
      })
      this.$emit('closeEditToDo')
    },
    onReset (evt) {
      this.$emit('closeEditToDo')
    }
  }
}
</script>
