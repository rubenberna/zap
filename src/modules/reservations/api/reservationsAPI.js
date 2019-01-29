import variables from '../../../variables/variables'

export default {
  fetchZapReservations(id, token) {
    return fetch(`${variables.root}v1/meeting_room_reservations?filters[meeting_room_id]=${id}`, {
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
    return fetch(`${variables.root}v1/meeting_room_reservations`, {
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
    return fetch(`${variables.root}v1/meeting_room_reservations/${updatedBooking.id}`, {
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
  }
}
