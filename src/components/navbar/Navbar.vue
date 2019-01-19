<template>
  <div class="navbar">
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
      margin-left: 49px;
      width: 94%;
  }
</style>
