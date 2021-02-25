import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCwQUu6vhw03x6H9Ur5mVX5bTB1jkDIWvc",
    authDomain: "tienda-test-online.firebaseapp.com",
    projectId: "tienda-test-online",
    storageBucket: "tienda-test-online.appspot.com",
    messagingSenderId: "898032757077",
    appId: "1:898032757077:web:4c5c45b9b1dee04954e7dc"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  const auth = fire.auth()

  export {auth};