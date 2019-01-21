import store from '../store'

const clientID = process.env.VUE_APP_CLIENT_ID
const clientSecret = process.env.VUE_APP_CLIENT_SECRET
const username = process.env.VUE_APP_USERNAME
const password = process.env.VUE_APP_PASSWORD
const root = 'https://open.sandbox-api.zapfloorhq.com/'

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

    return fetch(`${root}oauth/token`, {
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
  },

  fetchZapfloorRooms(token) {
    return fetch(`${root}v1/meeting_rooms`, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
        'Authorization': `Bearer ${ token }`
      }
    })
    .then(response => response.json())
    .then(function(data) { return data.data} )
    .catch(err => console.log(err))
  },

  fetchImage(id, token) {
    return fetch(`${root}v1/meeting_rooms/${id}/images`, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
        'Authorization': `Bearer ${ token }`
      }
    })
    .then(response => response.json())
    .then(function(data) { return data.data[0].attributes.image_url} )
    .catch(err => console.log(err))
  },

  fetchZapReservations(id, token) {
    return fetch(`${root}v1/meeting_room_reservations?filters[meeting_room_id]=${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
        'Authorization': `Bearer ${ token }`
      }
    })
    .then(response => response.json())
    .then(function(data) { return data.data } )
    .catch(err => console.log(err))
  },

  createZapReservation(newBooking, token) {
    const data = {
      "meeting_room_id": newBooking.meetingRoomId,
      "date_time_from": newBooking.start,
      "date_time_to": newBooking.end,
      "booked_for_user_id": newBooking.user,
      "status": "confirmed"
    }
    return fetch(`${root}v1/meeting_room_reservations`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ token }`
      }
    })
    .then(response => response.json())
    .catch(err => console.log(err))
  },

  updateZapReservation(updatedBooking, token) {
    const data = {
      "booking_reference": updatedBooking.id,
      "date_time_from": updatedBooking.start,
      "date_time_to": updatedBooking.end,
      "booked_for_user_id": updatedBooking.user,
      "status": "confirmed"
    }
    return fetch(`${root}v1/meeting_room_reservations/${updatedBooking.id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ token }`
      }
    })
    .then(response => response.json())
    .catch(err => console.log(err))
  },
  fetchUsers(token) {
    return fetch(`${root}v1/users`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ token }`
      }
    })
    .then(response => response.json())
    .catch(err => console.log(err))
  },
  addAttendees(token, eventId, list) {
    for (let user of list) {
      const data = {
        "attendee": {
          "user_id": user,
          "status": "invited"
        }
      }
      return fetch(`${root}v1/events/${eventId}/attendees`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${ token }`
        }
      })
      .then(response => response.json())
      .catch(err => console.log(err))
    }
  }
}
