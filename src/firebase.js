import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/firebase-messaging'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyARdzdqMR02c5acVD0UkvC0mqNCLvblAAM",
  authDomain: "chat-2023-branch2.firebaseapp.com",
  databaseURL: 'https://chat-2023-branch2.firebaseio.com',
  projectId: "chat-2023-branch2",
  storageBucket: "chat-2023-branch2.appspot.com",
  messagingSenderId: "862350220280",
  appId: "1:862350220280:web:fa10534301f0fe9f21140d",
  measurementId: "G-4SQS9V0QV3"
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