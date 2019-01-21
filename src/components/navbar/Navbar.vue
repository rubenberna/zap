<template>
  <div class="navbar">
    <div v-if='!isLoggedIn'
         class="logo">
      ZapFloorHQ
    </div>
    <el-button v-show='isLoggedIn'
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
      width: 21%;
      display: flex;
      justify-content: flex-end;
      padding-top: 20px;

      .logo {
        color: #fff;
        font-size: 20px;
      }
  }
</style>
