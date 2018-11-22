import Vue from 'vue'
import Vuex from 'vuex'
import firebaseRooms from '@/modules/firebaseRooms'
import zapFloorRooms from '@/modules/zapfloorRooms'
import auth from '@/modules/auth'
import reservations from '@/modules/reservations'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    firebaseRooms,
    zapFloorRooms,
    auth,
    reservations
  },
  //persist state for page reload
  plugins: [createPersistedState({
    paths: ['auth.user']
    })
  ],
})
