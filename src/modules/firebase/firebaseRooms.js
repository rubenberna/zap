import api from './api/firebaseAPI.js'

const state = {
  meetingRooms: [],
  pickedRoom: null,
}

const getters = {
  meetingRooms: state => state.meetingRooms,
  pickedRoom: state => state.pickedRoom
}

const actions = {
  async fetchMeetingRooms({ commit }) {
    commit('setMeetingRooms', null)
    const response = await api.fetchMeetingRooms()
    commit('setMeetingRooms', response)
  },
  selectRoom({ commit, dispatch, rootState }, room) {
    commit('setRoom', null)
    rootState.zapFloorRooms.zapRoom = null
    commit('setRoom', room)
    dispatch('fetchReservations', {root: true})
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
