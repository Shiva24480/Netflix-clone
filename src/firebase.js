import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDOtzdjWgtC1QCRO6HqjTiywoz6XWTvnfA",
  authDomain: "netflix-clone-363c9.firebaseapp.com",
  projectId: "netflix-clone-363c9",
  storageBucket: "netflix-clone-363c9.appspot.com",
  messagingSenderId: "551852227949",
  appId: "1:551852227949:web:e2cfaa60076fd4c9b16e64"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;