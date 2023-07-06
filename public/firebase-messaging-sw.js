// [START initialize_firebase_in_sw]
// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
importScripts('https://www.gstatic.com/firebasejs/8.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.9.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyDu53vkBrHOX-oN44GZkJXIe1fjnL7Zevo",
  authDomain: "chat-2023-branch1.firebaseapp.com",
  databaseURL: 'https://chat-2023-branch1.firebaseio.com',
  projectId: "chat-2023-branch1",
  storageBucket: "chat-2023-branch1.appspot.com",
  messagingSenderId: "1027671669142",
  appId: "1:1027671669142:web:05015a1a33ea05383d45b7",
  measurementId: "G-YDLYQPSZR9"
});

const messaging = firebase.messaging();