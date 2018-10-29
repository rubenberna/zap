import db from '../../db/firebaseInit'
import firebase from 'firebase'

export default {
  async fetchMeetingRooms() {
    let result = []
    await db.meetingRooms.orderBy('attributes.name', 'asc').get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            'id': doc.id,
            'name': doc.data().attributes.name,
            'capacity': doc.data().attributes.capacity,
            'layout': doc.data().attributes.layout,
            'videoconference': doc.data().attributes.videoconference,
            'with_view': doc.data().attributes.with_view,
            'image': doc.data().attributes.image,
            'reservations': doc.data().reservations,
          }
          result.push(data)
        })
      })
      return result
  },
  createReservation(roomId, booking) {
    db.reservations.add({
      start: booking.start,
      end: booking.end,
      title: booking.title,
      meetingRoom: roomId,
      createdOn: booking.createdOn
    })
  },
  async fetchReservations(roomId) {
    let reservations = []
    await db.reservations.where('meetingRoom', '==', roomId).get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          reservations.push(doc.data())
        })
      })
      return reservations
  },
  updateReservation(booking) {
    console.log(booking);
    // const bookingRef = db.reservations.doc(booking.id)
    //
    // bookingRef.update({
    //   start: booking.start,
    //   end: booking.start,
    //   title: booking.title
    // })
  }
}
