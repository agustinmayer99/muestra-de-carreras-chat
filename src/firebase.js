import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/firebase-messaging'

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyC23oeqRW6Mk2FM4kEVjO0P59Kpd2XimEg",
  authDomain: "chat-2023-branch0.firebaseapp.com",
  databaseURL: 'https://chat-2023-branch0.firebaseio.com',
  projectId: "chat-2023-branch0",
  storageBucket: "chat-2023-branch0.appspot.com",
  messagingSenderId: "280916605709",
  appId: "1:280916605709:web:64d4e316393c68af900e44",
  measurementId: "G-T2SYJ2VWJ2"
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