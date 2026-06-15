importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBNkBdFffJxV8Kj20PYX5YGZPQYlwla4nY",
  authDomain: "pubg-freefire-ttopup.firebaseapp.com",
  projectId: "pubg-freefire-ttopup",
  storageBucket: "pubg-freefire-ttopup.firebasestorage.app",
  messagingSenderId: "76395303308",
  appId: "1:76395303308:web:ae83f116d29692490cc6a9"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  const title = payload.notification?.title || 'Eure Handwerker';
  self.registration.showNotification(title, {
    body: payload.notification?.body || '',
    icon: './icon-192.png',
    badge: './icon-192.png'
  });
});
