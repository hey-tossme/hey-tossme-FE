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

// self.addEventListener("push", function(event) {
//   const title = event.data.title;
//   const options = {
//       body: event.data.body,
//   };

//   console.log(event)
//   console.log("Message received. title : ", title, "options : ", options);
//   event.waitUntil(self.registration.showNotification(title, options))

//   self.addEventListener("notificationclick", function (event) {
//     console.log("notification click");
//     const url = "/notify";
//     event.notification.close();
//     event.waitUntil(clients.openWindow(url));
//   });
// })

