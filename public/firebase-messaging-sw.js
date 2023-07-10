// [START initialize_firebase_in_sw]
// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
importScripts('https://www.gstatic.com/firebasejs/8.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.9.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyCoP0nyIz6D9ejcTBEquks76XSwK9WFlv8",
  authDomain: "chat-2023-branch3.firebaseapp.com",
  databaseURL: 'https://chat-2023-branch3.firebaseio.com/',
  projectId: "chat-2023-branch3",
  storageBucket: "chat-2023-branch3.appspot.com",
  messagingSenderId: "551624303253",
  appId: "1:551624303253:web:c65a542bf25c347900719c",
  measurementId: "G-PHR0410H1X"
});

const messaging = firebase.messaging();