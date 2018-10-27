<template>
  <div class="home">
    <navbar />
    <div v-if='!isLoggedIn'>
      <not-logged-in />
    </div>
    <div v-else
          class="home-layout">
      <calendar />
      <control-board />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Calendar from '@/components/Calendar'
import ControlBoard from '@/components/ControlBoard'
import Navbar from '@/components/Navbar'
import NotLoggedIn from '@/components/NotLoggedIn'
import { mapGetters } from 'vuex';

export default {
  name: 'home',
  components: {
    Calendar,
    ControlBoard,
    Navbar,
    NotLoggedIn
  },
  computed: mapGetters(['isLoggedIn'])
}
</script>

<style lang="scss" scoped>
  @import '../../style/main';

  .home {
    max-height: 90%;
    margin-top: 100px;
    margin: 0 auto;
    max-width: 1280px;
    min-width: 960px;
    width: 80%;

    .home-layout {
      margin-top: 50px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
  }


</style>
