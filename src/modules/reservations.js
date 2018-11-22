import api from '../apis/firebase.js'
import zapApi from '../apis/zapfloor.js'

const state = {
  reservations: [],
  zapReservations: []
}

const getters = {
  reservations: state => state.reservations,
  zapReservations: state => {
    return state.zapReservations.map(r => {
      return {
        start: r.attributes.date_time_from,
        end: r.attributes.date_time_to,
        id: r.id,
        title: r.attributes.extra_attributes.booked_for_user_name,
      }
    })
  }
}

const actions = {
  // Firebase reservations
  async fetchReservations({ rootState, commit }) {
    const roomId = rootState.firebaseRooms.pickedRoom.id
    const response = await api.fetchReservations(roomId)
    commit('setReservations', response)
  },
  async createReservation({ rootState, dispatch }, newBooking) {
    const roomId = rootState.firebaseRooms.pickedRoom.id
    await api.createReservation(roomId, newBooking)
    dispatch('fetchReservations')
  },
  async updateReservation({ dispatch }, updatedBooking) {
    await api.updateReservation(updatedBooking)
    dispatch('fetchReservations')
  },

  //ZapFloor reservations
  async fetchZapReservations({ rootState, commit }) {
    const roomId = rootState.zapFloorRooms.zapRoom.id
    const { token } = rootState.auth
    const response = await zapApi.fetchZapReservations(roomId, token)
    commit('setZapReservations', response)
  },
  async createZapReservation({ rootState, dispatch}, newBooking) {
    const { token } = rootState.auth
    await zapApi.createZapReservation(newBooking, token)
    dispatch('fetchZapReservations')
  },
  async updateZapReservation({ rootState, dispatch }, updatedBooking) {
    const { token } = rootState.auth
    await zapApi.updateZapReservation(updatedBooking, token)
    dispatch('fetchZapReservations')
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
