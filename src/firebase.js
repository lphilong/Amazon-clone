import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyBBHmRepASEip784f50xh7ZLhsvSz-m1rM',
    authDomain: 'clone-34384.firebaseapp.com',
    projectId: 'clone-34384',
    storageBucket: 'clone-34384.appspot.com',
    messagingSenderId: '205511134944',
    appId: '1:205511134944:web:5275b582dd8c6e5e220a85',
    measurementId: 'G-BCWVMLC8BC',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
