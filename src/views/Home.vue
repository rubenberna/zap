<template>
  <div class="home">
    <navbar />

    <!-- User is not logged in -->
    <div v-if='!isLoggedIn'>
      <not-logged-in />
    </div>

    <!-- User is logged in -->
    <div v-else
         class="home-layout">
      <div class="home-layout-column1">
        <control-board />
        <!-- Details from curent booking -->
        <div v-if='currReservation'
              class="reservation">
              <reservation-details />
        </div>
      </div>

      <div class="home-layout-column2">
        <!-- Calendar from firebase room -->
        <firebase-calendar v-if='pickedRoom'/>

        <!-- Calendar from zapfloor room -->
        <zapfloor-calendar v-else-if='zapRoom'/>

        <!-- Default calendar -->
        <empty-calendar v-else/>

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

  </div>
</template>

<script>
// @ is an alias to /src
import FirebaseCalendar from '@/components/calendars/FirebaseCalendar'
import ZapfloorCalendar from '@/components/calendars/ZapfloorCalendar'
import EmptyCalendar from '@/components/calendars/EmptyCalendar'
import ControlBoard from '@/components/sections/ControlBoard'
import Navbar from '@/components/navbar/Navbar'
import NotLoggedIn from '@/components/sections/NotLoggedIn'
import FirebaseRoomCard from '@/components/cards/FirebaseRoomCard'
import ZapfloorRoomCard from '@/components/cards/ZapfloorRoomCard'
import RoomImage from '@/components/images/RoomImage'
import ReservationDetails from '@/components/sections/ReservationDetails'
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
    RoomImage,
    ReservationDetails
  },
  computed: mapGetters(['isLoggedIn', 'pickedRoom', 'zapRoom', 'currReservation'])
}
</script>

<style lang="scss" scoped>

  .home {
    margin: 0 auto;
    max-width: 1600px;
    min-width: 940px;

    .home-layout {
      margin-top: 30px;
      display: flex;
      justify-content: space-evenly;
      .home-layout-column1 {
        height: 100%;
        display: flex;
        flex-direction: column;
        width: 20%;
      }
      .home-layout-column2 {
        width: 60%;
      }
    }

    .home-room-specs {
      margin-top: 21px;
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
  }

</style>
