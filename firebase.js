import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDpIf6vYnSsqvPwpDI38t-5MPLsKzYjnH4",
    authDomain: "react-native-assignment-5b1e6.firebaseapp.com",
    databaseURL: "https://react-native-assignment-5b1e6-default-rtdb.firebaseio.com",
    projectId: "react-native-assignment-5b1e6",
    storageBucket: "react-native-assignment-5b1e6.appspot.com",
    messagingSenderId: "732247382632",
    appId: "1:732247382632:web:192d6144df05319e4eb9dd",
    measurementId: "G-F2TG1YMRSP"
  };
  // Initialize Firebase
  let app = firebase.initializeApp(firebaseConfig);
   export const db = app.database();
