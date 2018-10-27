import api from '../apis/firebase.js'

const state = {
  meetingRooms: []
}

const getters = {
  meetingRooms: state => state.meetingRooms
}

const actions = {
  async fetchMeetingRooms({ commit }) {
    commit('setMeetingRooms', null)
    const response = await api.fetchMeetingRooms()
    commit('setMeetingRooms', response)
  }
}

const mutations = {
  setMeetingRooms: (state, list) => {
    state.meetingRooms = list
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
