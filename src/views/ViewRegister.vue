<template>
  <div
    class="d-flex align-items-center justify-content-between px-4 py-3 mb-2 w-100 login-form"
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
      <b-form-group id="input-group-2" label="Password:" label-for="passwordInput">
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
  </div>
</template>

<script>
import { handleRegistration } from '@/services/api'

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
      await handleRegistration({
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
</style>
