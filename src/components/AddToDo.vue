<template>
  <div
    class="d-flex align-items-center justify-content-between border shadow-sm px-4 py-3 mb-2 w-100"
  >
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset" class="w-100">
      <b-form-group id="input-group-1" label="Title*:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="toDo.title"
          type="text"
          required
          placeholder="Enter title"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Description:" label-for="input-2">
        <b-form-textarea
          id="input-2"
          v-model="toDo.description"
          placeholder="Enter description (optional)"
          rows="3"
        ></b-form-textarea>
      </b-form-group>
      <div class="d-flex justify-content-end">
        <b-button type="reset" variant="danger" class="mr-1">Cancel</b-button>
        <b-button id="okButton" type="submit" variant="primary">OK</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'EditToDo',
  data () {
    return {
      toDo: {
        title: '',
        description: ''
      }
    }
  },
  methods: {
    ...mapActions(['toggleShowAddToDo', 'addToDo']),
    cleanInputs () {
      this.toDo.title = ''
      this.toDo.description = ''
    },
    onSubmit (evt) {
      this.addToDo({ ...this.toDo, done: false })
      this.cleanInputs()
      this.toggleShowAddToDo()
    },
    onReset (evt) {
      this.cleanInputs()
      this.toggleShowAddToDo()
    }
  }
}
</script>
