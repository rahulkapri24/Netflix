import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAs__kSXMeUq0JWyJCBQThWvEpFWz-px3U",
  authDomain: "netflix-clone-app-e6b7f.firebaseapp.com",
  projectId: "netflix-clone-app-e6b7f",
  storageBucket: "netflix-clone-app-e6b7f.appspot.com",
  messagingSenderId: "486645860896",
  appId: "1:486645860896:web:ab6e52692ce581d4caca45"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { auth, db };