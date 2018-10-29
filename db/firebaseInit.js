import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

db.settings({
  timestampsInSnapshots: true
})

const meetingRooms = db.collection('meeting_rooms')
const reservations = db.collection('reservations')

export default {
  db,
  meetingRooms,
  reservations
}
