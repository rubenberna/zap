import api from '../apis/firebase.js'

const state = {
  reservations: []
}

const getters = {
  reservations: state => state.reservations
}

const actions = {
  async fetchReservations({ rootState, commit }) {
    const roomId = rootState.MeetingRooms.pickedRoom.id
    const response = await api.fetchReservations(roomId)
    console.log(response)
    commit('setReservations', response)
  },
  async createReservation({ rootState, dispatch }, newBooking) {
    const roomId = rootState.MeetingRooms.pickedRoom.id
    await api.createReservation(roomId, newBooking)
    dispatch('fetchReservations')
  },
  async updateReservation({ dispatch }, updatedBooking) {
    await api.updateReservation(updatedBooking)
    dispatch('fetchReservations')
  }
}

const mutations = {
  setReservations: (state, list) => {
    state.reservations = list
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
