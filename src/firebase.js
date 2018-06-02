import firebase from 'firebase/app';
import 'firebase/database';
var config = {
  apiKey: "AIzaSyCTh7V9BAGidvxf4jz7P51TSZg2Bd3BC90",
  authDomain: "react-redux-firebase-exa-e97de.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-exa-e97de.firebaseio.com",
  projectId: "react-redux-firebase-exa-e97de",
  storageBucket: "react-redux-firebase-exa-e97de.appspot.com",
  messagingSenderId: "55508046459"
};
firebase.initializeApp(config);

const database = firebase.database();
//const recordsRef = databaseRef.child("records");

export default database;
