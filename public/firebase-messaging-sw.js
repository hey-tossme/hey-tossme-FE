importScripts("https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.7.1/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyCwgEVmBlVLADN66Cxf8xRUH0Gc6pdTfks",
  authDomain: "heytossme2.firebaseapp.com",
  projectId: "heytossme2",
  storageBucket: "heytossme2.appspot.com",
  messagingSenderId: "657874532776",
  appId: "1:657874532776:web:7cba8f2953e41d5853859d"
});

const messaging = firebase.messaging();

