<template>
  <div
    class="d-flex flex-wrap align-items-center justify-content-between px-4 py-3 mb-2 w-100 login-form"
  >
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset" class="w-100">
      <b-form-group id="input-group-1" label="Email:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="username"
          type="text"
          required
          placeholder="Enter your email"
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
        <b-button
          id="okButton"
          type="submit"
          variant="primary"
          @click.prevent="onSubmit"
          >Submit</b-button
        >
      </div>
    </b-form>
    <div class="break"></div>
    <small class="d-block mt-4 text-muted"
      >I don't have an account yet, I want to
      <b-link :to="{ name: 'Register' }">create a new account</b-link>.</small
    >
  </div>
</template>

<script>
import { loginWithCredentials } from '@/services/api'

export default {
  name: 'ViewLogin',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit () {
      console.log('Login attempt')
      await loginWithCredentials({
        email: this.username,
        password: this.password
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  max-width: 30rem;
}
.break {
  flex-basis: 100%;
  height: 0;
}
</style>
