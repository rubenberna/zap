import store from '../../../store'
import variables from '../../../variables/variables'

export default {
  login() {
    const data = {
      grant_type: 'password',
      client_id: variables.clientID,
      client_secret: variables.clientSecret,
      username: variables.username,
      password: variables.password,
      scope: 'BASIC:READ BASIC:WRITE SOCIAL:READ SOCIAL:WRITE MEETING_ROOM_RESERVATION:READ MEETING_ROOM_RESERVATION:WRITE'
    }

    return fetch(`${variables.root}oauth/token`, {
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
      let user = data.user
      store.dispatch('finalizeLogin', token)
      store.dispatch('saveUser', user)
    })
  }
}
