<template>
  <header>
    <b-navbar toggleable="md" type="dark" class="flex-nowrap" variant="info">
      <b-navbar-brand :to="{ name: 'ToDoList' }">
        <img class="header__logo" :src="logo" alt="To Do App logo" />
        <span class="ml-3">ToDo List</span>
      </b-navbar-brand>
      <b-navbar-nav class="title-wrapper">
       <b-nav-text class="h3 text-white mx-auto">{{$route.name}}</b-nav-text>
       </b-navbar-nav>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" class="menu-wrapper" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto mr-3 py-3 pl-3">
          <!-- Using 'button-content' slot -->
          <b-nav-item :to="{ name: 'Login' }"
            ><span class="header__login">Login / Register</span></b-nav-item
          >
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
@import "../styles/variables.scss";

.header__logo {
  width: 3rem;
  height: auto;
}
.header__login {
  color: $white;
}
.title-wrapper {
  flex: 0 1 100%;
}
.menu-wrapper {
  flex: none;
}
</style>
