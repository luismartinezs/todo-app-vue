<template>
 <div
    class="d-flex align-items-center justify-content-between px-4 py-3 mb-2 w-100 login-form"
  >
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset" class="w-100">
      <b-form-group id="input-group-1" label="User:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="username"
          type="text"
          required
          placeholder="Enter your user name"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="password"
          type="text"
          required
          placeholder="Enter your password"
        ></b-form-input>
      </b-form-group>
      <div class="d-flex justify-content-end">
        <b-button id="okButton" type="submit" variant="primary">Submit</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'ViewLogin',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit (evt) {
      // Do something
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form {
    max-width: 30rem;
}
</style>
