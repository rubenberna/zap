import api from '../apis/firebase.js'

const state = {

}

const getters = {

}

const actions = {
  createBooking({rootState}, newBooking) {
    const roomId = rootState.MeetingRooms.pickedRoom.id
    api.createBooking(roomId, newBooking)
  }
}

const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
}
