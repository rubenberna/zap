import api from './api/zapfloorRoomsAPI.js'

const state = {
  zapfloorRooms: [],
  zapRoom: null,
  zapRoomImage: null
}

const getters = {
  zapfloorRooms: state => state.zapfloorRooms,
  zapRoom: state => state.zapRoom,
  zapRoomImage: state => state.zapRoomImage
}

const actions = {
  async fetchZapfloorRooms({ rootState, commit }) {
    commit('setZapfloorRooms', null)
    const { token } = rootState.auth
    const response = await api.fetchZapfloorRooms(token)
    commit('setZapfloorRooms', response)
  },
  selectZapRoom({ commit, dispatch, rootState }, room) {
    commit('setZapRoom', null)
    rootState.firebaseRooms.pickedRoom = null
    commit('setZapRoom', room)
    dispatch('fetchImage', room)
    dispatch('fetchZapReservations', {root: true})
  },
  async fetchImage({ commit, rootState }, room) {
    commit('setZapRoomImage', null)
    const id = room.id
    const { token } = rootState.auth
    const response = await api.fetchImage(id, token)
    commit('setZapRoomImage', response)
  }
}

const mutations = {
  setZapfloorRooms: (state, list) => {
    state.zapfloorRooms = list
  },
  setZapRoom: (state, room) => {
    state.zapRoom = room
  },
  setZapRoomImage: (state, image) => {
    state.zapRoomImage = image
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
