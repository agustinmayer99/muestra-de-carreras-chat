// [START initialize_firebase_in_sw]
// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
importScripts('https://www.gstatic.com/firebasejs/8.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.9.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyDdmxCshosNnp5qIxPqZRw7oAuDhOiKbK8",
  authDomain: "chat-muestra-carreras-2023-1.firebaseapp.com",
  databaseURL: "https://chat-muestra-carreras-2023-1.firebaseio.com",
  projectId: "chat-muestra-carreras-2023-1",
  storageBucket: "chat-muestra-carreras-2023-1.appspot.com",
  messagingSenderId: "364238469892",
  appId: "1:364238469892:web:89c6e66008046a600c6e51",
  measurementId: "G-FS36KVTVZM"
});

const messaging = firebase.messaging();