import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  const auth = fire.auth()

  export {auth};
