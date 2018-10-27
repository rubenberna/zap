import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

db.settings({
  timestampsInSnapshots: true
})

const meetingRooms = db.collection('meeting_rooms')

export default {
  db,
  meetingRooms
}
