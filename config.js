
import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBRlEbkhZjYRWOP6Cg8RACRw7PcD6Jzq2A",
    authDomain: "classroom-987fb.firebaseapp.com",
    databaseURL: "https://classroom-987fb.firebaseio.com",
    projectId: "classroom-987fb",
    storageBucket: "classroom-987fb.appspot.com",
    messagingSenderId: "933261773626",
    appId: "1:933261773626:web:139cab7806f2862fb0de03"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
  