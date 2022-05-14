import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBiKf3DefUJvB_Z4_9u8HpbPvopz0VSAw",
    authDomain: "reels-5ed09.firebaseapp.com",
    projectId: "reels-5ed09",
    storageBucket: "reels-5ed09.appspot.com",
    messagingSenderId: "655225846615",
    appId: "1:655225846615:web:57231cde7d973e5bf79c12",
    measurementId: "G-SL57QCMFCP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    posts : firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage()