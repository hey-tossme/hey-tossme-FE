importScripts("https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.7.1/firebase-messaging.js"
);

firebase.initializeApp({
    apiKey: "AIzaSyBLanhsR2zy6eOVCXgdCNvrsli_OO1N1_4",
    authDomain: "heytossme-ed900.firebaseapp.com",
    projectId: "heytossme-ed900",
    storageBucket: "heytossme-ed900.appspot.com",
    messagingSenderId: "487147260981",
    appId: "1:487147260981:web:598fde8581824b56dcf57c",
    measurementId: "G-GHXT3HQ94T",
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

