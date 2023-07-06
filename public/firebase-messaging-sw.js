// [START initialize_firebase_in_sw]
// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
importScripts('https://www.gstatic.com/firebasejs/8.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.9.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyCPBnCYNidoItPSAYq5wQNlBIIUz28Pfvo",
  authDomain: "chat-2023-branchdoe.firebaseapp.com",
  databaseURL: 'https://chat-2023-branchdoe.firebaseio.com',
  projectId: "chat-2023-branchdoe",
  storageBucket: "chat-2023-branchdoe.appspot.com",
  messagingSenderId: "653693889799",
  appId: "1:653693889799:web:e1cc49b53f73fff7b6a9a2",
  measurementId: "G-D69KXKS86Y"
});

const messaging = firebase.messaging();