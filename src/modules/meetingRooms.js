import api from '../apis/firebase.js'

const state = {
  meetingRooms: [],
  meetingRoomImage: null,
  pickedRoom: null
}

const getters = {
  meetingRooms: state => state.meetingRooms,
  image: state => state.meetingRoomImage,
  pickedRoom: state => state.pickedRoom
}

const actions = {
  async fetchMeetingRooms({ commit }) {
    commit('setMeetingRooms', null)
    const response = await api.fetchMeetingRooms()
    commit('setMeetingRooms', response)
  },
  getImage({ commit }, image) {
    commit('setImage', image)
  },
  selectRoom({ commit }, room) {
    commit('setRoom', null)
    commit('setRoom', room)
  }
}

const mutations = {
  setMeetingRooms: (state, list) => {
    state.meetingRooms = list
  },
  setImage: (state, image) => {
    state.meetingRoomImage = image
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
