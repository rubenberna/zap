import Vue from 'vue'
import Vuex from 'vuex'
import MeetingRooms from '@/modules/meetingRooms'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    MeetingRooms
  }
})
