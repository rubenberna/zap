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

        <div class="home-layout-column1">
          <control-board />
          <!-- Details from curent booking -->
          <div v-if='currReservation'
                class="reservation">
                <reservation-details />
          </div>
        </div>

        <div class="home-layout-column2">

        </div>
        <!-- Calendar from firebase room -->
        <firebase-calendar v-if='pickedRoom'/>
        <!-- Calendar from zapfloor room -->
        <zapfloor-calendar v-else-if='zapRoom'/>
        <!-- Default calendar -->
        <empty-calendar v-else/>
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
import ReservationDetails from '@/components/ReservationDetails'
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
    margin-top: 100px;
    margin: 0 auto;
    max-width: 1400px;
    min-width: 960px;

    .home-layout {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      max-height: 60%;
      .home-layout-column1 {
        height: 100%;
        display: flex;
        flex-direction: column;
        background: red;
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
