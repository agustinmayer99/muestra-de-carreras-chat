// [START initialize_firebase_in_sw]
// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
importScripts('https://www.gstatic.com/firebasejs/8.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.9.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyC23oeqRW6Mk2FM4kEVjO0P59Kpd2XimEg",
  authDomain: "chat-2023-branch0.firebaseapp.com",
  databaseURL: 'https://chat-2023-branch0.firebaseio.com',
  projectId: "chat-2023-branch0",
  storageBucket: "chat-2023-branch0.appspot.com",
  messagingSenderId: "280916605709",
  appId: "1:280916605709:web:64d4e316393c68af900e44",
  measurementId: "G-T2SYJ2VWJ2"
});

const messaging = firebase.messaging();