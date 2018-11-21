import api from '../apis/zapfloor.js'

const state = {
  zapfloorRooms: [],
  zapRoom: null
}

const getters = {
  zapfloorRooms: state => state.zapfloorRooms,
  zapRoom: state => state.zapRoom
}

const actions = {
  async fetchZapfloorRooms({ rootState, commit }) {
    commit('setZapfloorRooms', null)
    const { token } = rootState.Auth
    const response = await api.fetchZapfloorRooms(token)
    console.log(response);
    commit('setZapfloorRooms', response)
  },
  selectZapRoom({ commit, dispatch, rootState }, room) {
    commit('setZapRoom', null)
    rootState.FirebaseRooms.pickedRoom = null
    commit('setZapRoom', room)
    console.log(room)
  }
}

const mutations = {
  setZapfloorRooms: (state, list) => {
    state.zapfloorRooms = list
  },
  setZapRoom: (state, room) => {
    state.zapRoom = room
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
