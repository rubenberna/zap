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
  createBooking(roomId, newBooking) {
    db.meetingRooms.doc(roomId).update({
      reservations: firebase.firestore.FieldValue.arrayUnion(newBooking)
    })
  }
}
