import api from '../apis/firebase.js'
import zapApi from '../apis/zapfloor.js'

const state = {
  reservations: [],
  zapReservations: []
}

const getters = {
  reservations: state => state.reservations,
  zapReservations: state => state.zapReservations
}

const actions = {
  // Firebase reservations
  async fetchReservations({ rootState, commit }) {
    const roomId = rootState.FirebaseRooms.pickedRoom.id
    const response = await api.fetchReservations(roomId)
    commit('setReservations', response)
  },
  async createReservation({ rootState, dispatch }, newBooking) {
    const roomId = rootState.FirebaseRooms.pickedRoom.id
    await api.createReservation(roomId, newBooking)
    dispatch('fetchReservations')
  },
  async updateReservation({ dispatch }, updatedBooking) {
    await api.updateReservation(updatedBooking)
    dispatch('fetchReservations')
  },

  //ZapFloor reservations
  async fetchZapReservations({ rootState, commit }) {
    const roomId = rootState.ZapFloorRooms.zapRoom.id
    const { token } = rootState.Auth
    const response = await zapApi.fetchZapReservations(roomId, token)
    commit('setZapReservations', response)
  }
}

const mutations = {
  setReservations: (state, list) => {
    state.reservations = list
  },
  setZapReservations: (state, list) => {
    state.zapReservations = list
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
