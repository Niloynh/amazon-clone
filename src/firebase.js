import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC-gj8HFV3IbN6ejEQNQ7jQBGIWKeV0uCs",
  authDomain: "app-7b774.firebaseapp.com",
  projectId: "app-7b774",
  storageBucket: "app-7b774.appspot.com",
  messagingSenderId: "368844901243",
  appId: "1:368844901243:web:e3dd6579180d8091cd4bde"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

