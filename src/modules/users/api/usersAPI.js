import variables from '../../../variables/variables'

export default {
  fetchUsers(token) {
    return fetch(`${variables.root}v1/users`, {
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
      return fetch(`${variables.root}v1/events/${eventId}/attendees`, {
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
