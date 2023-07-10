import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/firebase-messaging'

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyCoP0nyIz6D9ejcTBEquks76XSwK9WFlv8",
  authDomain: "chat-2023-branch3.firebaseapp.com",
  databaseURL: 'https://chat-2023-branch3.firebaseio.com/',
  projectId: "chat-2023-branch3",
  storageBucket: "chat-2023-branch3.appspot.com",
  messagingSenderId: "551624303253",
  appId: "1:551624303253:web:c65a542bf25c347900719c",
  measurementId: "G-PHR0410H1X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const fb = {
  auth: firebase.auth(),
  messaging: firebase.messaging(),
  firestore: firebase.firestore(),
  async login() {
      return firebase.auth().signInAnonymously()
              .then(function(result) {
                  return {success: true, data: result};
              })
              .catch(function(error){
                  return {success: false, error: error.message};
              });
  },

}
export default fb