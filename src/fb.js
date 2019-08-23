  import firebase from 'firebase/app';
  import 'firebase/firestore'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAigePTwxZM00JiA170QHlwa-B4EkT9QRI",
    authDomain: "kk-portfolio.firebaseapp.com",
    databaseURL: "https://kk-portfolio.firebaseio.com",
    projectId: "kk-portfolio",
    storageBucket: "",
    messagingSenderId: "1068856717596",
    appId: "1:1068856717596:web:908c96a7b0480d8a"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  db.settings({timestampsInSnapshots:true});

  export default db;