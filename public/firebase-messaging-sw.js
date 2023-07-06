// [START initialize_firebase_in_sw]
// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
importScripts('https://www.gstatic.com/firebasejs/8.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.9.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyARdzdqMR02c5acVD0UkvC0mqNCLvblAAM",
  authDomain: "chat-2023-branch2.firebaseapp.com",
  databaseURL: 'https://chat-2023-branch2.firebaseio.com',
  projectId: "chat-2023-branch2",
  storageBucket: "chat-2023-branch2.appspot.com",
  messagingSenderId: "862350220280",
  appId: "1:862350220280:web:fa10534301f0fe9f21140d",
  measurementId: "G-4SQS9V0QV3"
});

const messaging = firebase.messaging();