<template>
  <div class="home">
    <navbar />

    <!-- User is not logged in -->
    <div v-if='!isLoggedIn'>
      <not-logged-in />
    </div>

    <!-- User is logged in -->
    <div v-else>
      <div class="home-layout">
        <!-- Calendar from firebase room -->
          <firebase-calendar v-if='pickedRoom'/>
          <!-- Calendar from zapfloor room -->
          <zapfloor-calendar v-else-if='zapRoom'/>
          <!-- Default calendar -->
          <empty-calendar v-else/>
        <control-board />
      </div>

      <!-- Details from firebase room -->
      <div v-if='pickedRoom'
           class="home-room-specs">
           <firebase-room-card />
      </div>

      <!-- Details from zapfloor room -->
      <div v-if='zapRoom'
           class="home-room-specs">
           <zapfloor-room-card />
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import FirebaseCalendar from '@/components/calendars/FirebaseCalendar'
import ZapfloorCalendar from '@/components/calendars/ZapfloorCalendar'
import EmptyCalendar from '@/components/calendars/EmptyCalendar'
import ControlBoard from '@/components/ControlBoard'
import Navbar from '@/components/navbar/Navbar'
import NotLoggedIn from '@/components/NotLoggedIn'
import FirebaseRoomCard from '@/components/cards/FirebaseRoomCard'
import ZapfloorRoomCard from '@/components/cards/ZapfloorRoomCard'
import RoomImage from '@/components/images/RoomImage'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    FirebaseCalendar,
    ZapfloorCalendar,
    EmptyCalendar,
    ControlBoard,
    Navbar,
    NotLoggedIn,
    FirebaseRoomCard,
    ZapfloorRoomCard,
    RoomImage
  },
  computed: mapGetters(['isLoggedIn', 'pickedRoom', 'zapRoom'])
}
</script>

<style lang="scss" scoped>

  .home {
    margin-top: 100px;
    margin: 0 auto;
    max-width: 1400px;
    min-width: 960px;

    .home-layout {
      margin-top: 30px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      max-height: 60%;
    }

    .home-room-specs {
      margin-top: 21px;
      width: 100%;
    }
  }

</style>
