<template>
  <div class="navbar">
    <h1 class="navbar-title">ZapfloorHQ</h1>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'navbar',
  }
</script>

<style lang="scss" scoped>
  .navbar {
      display: flex;
      justify-content: flex-start;
      margin-top: 50px;
      width: 40%;
  }
</style>
