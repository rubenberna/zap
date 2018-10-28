import api from '../apis/firebase.js'

const state = {
  meetingRooms: [],
  pickedRoom: null
}

const getters = {
  meetingRooms: state => state.meetingRooms,
  pickedRoom: state => state.pickedRoom,
  reservations: state => state.pickedRoom.reservations
}

const actions = {
  async fetchMeetingRooms({ commit }) {
    commit('setMeetingRooms', null)
    const response = await api.fetchMeetingRooms()
    commit('setMeetingRooms', response)
  },
  selectRoom({ commit }, room) {
    commit('setRoom', null)
    commit('setRoom', room)
    console.log(room.reservations)
  }
}

const mutations = {
  setMeetingRooms: (state, list) => {
    state.meetingRooms = list
  },
  setRoom: (state, room) => {
    state.pickedRoom = room
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
