import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/firebase-messaging'

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyDdmxCshosNnp5qIxPqZRw7oAuDhOiKbK8",
  authDomain: "chat-muestra-carreras-2023-1.firebaseapp.com",
  databaseURL: "https://chat-muestra-carreras-2023-1.firebaseio.com",
  projectId: "chat-muestra-carreras-2023-1",
  storageBucket: "chat-muestra-carreras-2023-1.appspot.com",
  messagingSenderId: "364238469892",
  appId: "1:364238469892:web:89c6e66008046a600c6e51",
  measurementId: "G-FS36KVTVZM"
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