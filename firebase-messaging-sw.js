// web/firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAAlapzEJXyEBle78KU-Z593aXYCogrLTM",
  authDomain: "memyfolks-342a9.firebaseapp.com",
  projectId: "memyfolks-342a9",
  storageBucket: "memyfolks-342a9.appspot.com",
  messagingSenderId: "591607460746",
  appId: "1:591607460746:web:33f822538f54e21b058e73"
});

const messaging = firebase.messaging();
