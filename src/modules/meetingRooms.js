import api from '../api/zapfloor.js'

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
    console.log(response);
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
