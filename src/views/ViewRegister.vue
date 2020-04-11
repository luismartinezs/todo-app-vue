<template>
  <div
    class="d-flex flex-column align-items-center justify-content-between px-4 py-3 mb-2 w-100 login-form"
  >
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset" class="w-100">
      <b-form-group id="input-group-1" label="Email:" label-for="emailInput">
        <b-form-input
          id="emailInput"
          v-model="username"
          type="text"
          required
          placeholder="Enter your email"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Password:"
        label-for="passwordInput"
      >
        <b-form-input
          id="passwordInput"
          v-model="password"
          type="text"
          required
          placeholder="Enter your password"
        ></b-form-input>
      </b-form-group>
      <div class="d-flex justify-content-end">
        <b-button
          id="registerSubmitButton"
          type="submit"
          variant="primary"
          @click.prevent="onSubmit"
          >Submit</b-button
        >
      </div>
    </b-form>
    <p v-show="triedRegistration" class="mt-4">
      <span class="text-danger" v-show="!couldRegister">Unable to register!</span>
      <span class="text-success" v-show="couldRegister">Registration successful!</span>
    </p>
  </div>
</template>

<script>
import { handleRegistration } from '@/services/api'

export default {
  name: 'ViewRegister',
  data () {
    return {
      username: '',
      password: '',
      triedRegistration: false,
      couldRegister: false
    }
  },
  methods: {
    async onSubmit () {
      try {
        await handleRegistration({
          email: this.username,
          password: this.password
        })
        this.registerStatus = true
      } catch (err) {
        this.registerStatus = false
      } finally {
        this.triedRegistration = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  max-width: 30rem;
}
</style>
