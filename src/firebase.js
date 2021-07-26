import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAH0Ase4QWtwT8xdFp0c3bvK98UI6j0bnY",
    authDomain: "chat-muestra.firebaseapp.com",
    projectId: "chat-muestra",
    storageBucket: "chat-muestra.appspot.com",
    messagingSenderId: "502634347735",
    appId: "1:502634347735:web:72ec28fbb394d3d791c492",
    measurementId: "G-7V8Z7K2W1Q"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const fb = {
  auth: firebase.auth(),
  firestore: firebase.firestore(),
  async login(username) {
      return firebase.auth().signInAnonymously()
              .then(function(result) {
                  return {success: true, data: result};
              })
              .catch(function(error){
                  return {success: false, error: error.message};
              });
  },
  // async logout() {
  //     return firebase.auth().signOut()
  //         .then(function() {
  //             return {success: true};
  //         })
  //         .catch(function(error) {
  //             return {success: false, error: error};
  //         });
  // }
}

export default fb