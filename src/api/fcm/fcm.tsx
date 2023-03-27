import { firebaseApp } from "../../firebase";

export default function sendFCMTokenFuc() {
    const firebaseMessaging = firebaseApp.messaging();

    firebaseMessaging
        .requestPermission()
        .then(() => {
            return firebaseMessaging.getToken(firebaseMessaging, {
                vapidKey:
                    "BIniR9YstJOEKxIflD9vEUdGjNi7Z3_h1k5gXduQVNNxq-_i0BH-vTTWGcFRBPmxxA9yhvPRNs9xmVbdBHdeDkE",
            });
        })
        .then(function (token: any) {
            console.log(token);
            // 토큰 post api 요청
        })
        .catch(function (error: any) {
            console.log("FCM Error : ", error);
        });
}
