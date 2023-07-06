import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/firebase-messaging'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCPBnCYNidoItPSAYq5wQNlBIIUz28Pfvo",
  authDomain: "chat-2023-branchdoe.firebaseapp.com",
  databaseURL: 'https://chat-2023-branchdoe.firebaseio.com',
  projectId: "chat-2023-branchdoe",
  storageBucket: "chat-2023-branchdoe.appspot.com",
  messagingSenderId: "653693889799",
  appId: "1:653693889799:web:e1cc49b53f73fff7b6a9a2",
  measurementId: "G-D69KXKS86Y"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const fb = {
  auth: firebase.auth(),
  messaging: firebase.messaging(),
  firestore: firebase.firestore(),
  async login() {
    return firebase.auth().signInAnonymously()
      .then(function (result) {
        return { success: true, data: result };
      })
      .catch(function (error) {
        return { success: false, error: error.message };
      });
  },

}
export default fb