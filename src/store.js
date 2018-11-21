import Vue from 'vue'
import Vuex from 'vuex'
import FirebaseRooms from '@/modules/firebaseRooms'
import ZapFloorRooms from '@/modules/zapfloorRooms'
import Auth from '@/modules/auth'
import Reservations from '@/modules/reservations'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    FirebaseRooms,
    ZapFloorRooms,
    Auth,
    Reservations
  }
})
