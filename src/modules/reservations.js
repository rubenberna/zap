import api from '../apis/firebase.js'
import zapApi from '../apis/zapfloor.js'

const state = {
  reservations: [],
  zapReservations: [],
  currReservation: null
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
  },
  currReservation: state => state.currReservation
}

const actions = {
  // Firebase reservations
  async fetchReservations({ rootState, commit }) {
    const roomId = rootState.firebaseRooms.pickedRoom.id
    const response = await api.fetchReservations(roomId)
    commit('setReservations', response)
  },
  // Creates new reservation and fetches list
  async createReservation({ rootState, dispatch, commit }, newBooking) {
    const roomId = rootState.firebaseRooms.pickedRoom.id
    await api.createReservation(roomId, newBooking)
    dispatch('fetchReservations')
    const reservation = {
      start: newBooking.start,
      end: newBooking.end,
      title: newBooking.title,
      createdOn: newBooking.createdOn,
      room: 'Texas'
    }
    commit('setCurrReservation', reservation)
  },
  // Updates selected reservation and fetches list
  async updateReservation({ dispatch, commit }, updatedBooking) {
    await api.updateReservation(updatedBooking)
    dispatch('fetchReservations')
    const reservation = {
      start: updatedBooking.start,
      end: updatedBooking.end,
      title: updatedBooking.title,
      createdOn: updatedBooking.createdOn,
      room: 'Colorado'
    }
    commit('setCurrReservation', reservation)
  },

  //ZapFloor reservations
  async fetchZapReservations({ rootState, commit }) {
    const roomId = rootState.zapFloorRooms.zapRoom.id
    const { token } = rootState.auth
    const response = await zapApi.fetchZapReservations(roomId, token)
    commit('setZapReservations', response)
  },
  // Creates new reservation and fetches list
  async createZapReservation({ rootState, dispatch, commit }, newBooking) {
    const { token } = rootState.auth
    await zapApi.createZapReservation(newBooking, token)
    dispatch('fetchZapReservations')
    commit('setCurrReservation', newBooking)
  },
  // Updates selected reservation and fetches list
  async updateZapReservation({ rootState, dispatch, commit }, updatedBooking) {
    const { token } = rootState.auth
    await zapApi.updateZapReservation(updatedBooking, token)
    dispatch('fetchZapReservations')
    commit('setCurrReservation', updatedBooking)
  }
}

const mutations = {
  setReservations: (state, list) => {
    state.reservations = list
  },
  setZapReservations: (state, list) => {
    state.zapReservations = list
  },
  setCurrReservation: (state, booking) => {
    state.currReservation = booking
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
