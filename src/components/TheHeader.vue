<template>
  <header>
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-brand href="#">
        <img class="header__logo" :src="logo" alt="To Do App logo" />
        <span class="ml-3">ToDo List</span>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto mr-3">
            <!-- Using 'button-content' slot -->
            <span class="header__login">Login</span>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
import logo from '@/assets/logo.png'

export default {
  name: 'TheHeader',
  data () {
    return {
      logo
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.header__logo {
  width: 3rem;
  height: auto;
}
.header__login {
    color: $white;
}
</style>
