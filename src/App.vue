<template>
  <div id="app">
    <!-- <font-awesome-icon icon="user-secret" /> -->
    <the-header />
    <div class="container mt-3">
      <div
        class="d-flex flex-column justify-content-center align-items-center w-100"
      >
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'

export default {
  name: 'app',
  components: {
    TheHeader
  }
}
</script>

<style lang="scss">
@import "./styles/variables.scss";

#app {
  font-family: $font-family-base;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
