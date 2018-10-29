import Vue from 'vue'
import Vuex from 'vuex'
import MeetingRooms from '@/modules/meetingRooms'
import Auth from '@/modules/auth'
import Reservations from '@/modules/reservations'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    MeetingRooms,
    Auth,
    Reservations
  }
})
