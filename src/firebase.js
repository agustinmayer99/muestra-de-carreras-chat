import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/firebase-messaging'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDu53vkBrHOX-oN44GZkJXIe1fjnL7Zevo",
  authDomain: "chat-2023-branch1.firebaseapp.com",
  databaseURL: 'https://chat-2023-branch1.firebaseio.com',
  projectId: "chat-2023-branch1",
  storageBucket: "chat-2023-branch1.appspot.com",
  messagingSenderId: "1027671669142",
  appId: "1:1027671669142:web:05015a1a33ea05383d45b7",
  measurementId: "G-YDLYQPSZR9"
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