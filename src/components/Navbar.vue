<template>
  <div class="navbar">
    <h1 class="navbar-title">ZapfloorHQ</h1>
    <el-button v-if='!isLoggedIn'
               round
               @click.prevent='login'>
               Login
    </el-button>
    <el-button v-else
               round
               @click.prevent='logout'>
               Logout
    </el-button>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'navbar',
    methods: mapActions(['login', 'logout']),
    computed: mapGetters(['isLoggedIn'])
  }
</script>

<style lang="scss" scoped>
  .navbar {
      display: flex;
      margin-top: 30px;
      width: 105%;
  }
</style>
