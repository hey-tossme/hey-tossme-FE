import { firebaseApp } from "../firebase";

export default function sendFCMTokenFuc() {
    const firebaseMessaging = firebaseApp.messaging();

    firebaseMessaging
        .requestPermission()
        .then(() => {
            return firebaseMessaging.getToken({
                vapidKey:
                    "BIniR9YstJOEKxIflD9vEUdGjNi7Z3_h1k5gXduQVNNxq-_i0BH-vTTWGcFRBPmxxA9yhvPRNs9xmVbdBHdeDkE",
            });
        })
        .then(function (token: any) {
            return token;
        })
        .catch(function (error: any) {
            return error;
        });
}
