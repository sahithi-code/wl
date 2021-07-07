import * as firebase from 'firebase'
require ('@firebase/firestore')

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCIBVr5OTotEUrfTh5CIXO6QtzuCN7rwQs",
    authDomain: "willy-24c70.firebaseapp.com",
    databaseURL: "https://willy-24c70.firebaseio.com",
    projectId: "willy-24c70",
    storageBucket: "willy-24c70.appspot.com",
    messagingSenderId: "97196354723",
    appId: "1:97196354723:web:052a4dfc823f0cc165e316"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore()