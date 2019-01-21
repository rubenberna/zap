import api from '../apis/zapfloor.js'

const state = {
  users: [],
  attendees: []
}

const getters = {
  users: state => state.users,
  attendees: state => state.attendees
}

const actions = {
  async fetchUsers({commit, rootState}) {
    const { token } = rootState.auth
    const response = await api.fetchUsers(token)
    commit('setUsers', response.data)
  },
  async addAttendees({commit, rootState}, list) {
    const { token } = rootState.auth
    const eventId = rootState.reservations.currReservation.id
    await api.addAttendees(token, eventId, list)
    commit('setAttendees', list)
  }
}

const mutations = {
  setUsers: (state, list) => {
    state.users = list
  },
  setAttendees: (state, list) => {
    state.attendees = list
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
