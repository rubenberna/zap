import store from '../store'

const clientID = process.env.VUE_APP_CLIENT_ID
const clientSecret = process.env.VUE_APP_CLIENT_SECRET
const username = process.env.VUE_APP_USERNAME
const password = process.env.VUE_APP_PASSWORD
const root = 'https://sandbox-api.zapfloorhq.com'

export default {
  login() {
    
    const data = {
      grant_type: 'password',
      client_id: clientID,
      client_secret: clientSecret,
      username,
      password,
      scope: 'BASIC:READ BASIC:WRITE SOCIAL:READ SOCIAL:WRITE MEETING_ROOM_RESERVATION:READ MEETING_ROOM_RESERVATION:WRITE'
    }

    return fetch(`${root}/oauth/token`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      let token = data.access_token
      store.dispatch('finalizeLogin', token)
    })
  },
  fetchMeetingRooms() {
    //
  }
}
