<template>
  <div class="home">
    <navbar />
    <div v-if='!isLoggedIn'>
      <not-logged-in />
    </div>
    <div v-else>
      <div class="home-layout">
        <calendar />
        <control-board />
      </div>
      <div v-if='pickedRoom'
           class="home-room-specs">
           <room-card />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Calendar from '@/components/Calendar'
import ControlBoard from '@/components/ControlBoard'
import Navbar from '@/components/navbar/Navbar'
import NotLoggedIn from '@/components/NotLoggedIn'
import RoomCard from '@/components/cards/RoomCard'
import RoomImage from '@/components/images/RoomImage'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    Calendar,
    ControlBoard,
    Navbar,
    NotLoggedIn,
    RoomCard,
    RoomImage
  },
  computed: mapGetters(['isLoggedIn', 'pickedRoom'])
}
</script>

<style lang="scss" scoped>
  @import '../../style/main';

  .home {
    margin-top: 100px;
    margin: 0 auto;
    max-width: 1400px;
    min-width: 960px;

    .home-layout {
      margin-top: 20px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      max-height: 60%;
    }

    .home-room-specs {
      margin-top: 10px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

</style>
