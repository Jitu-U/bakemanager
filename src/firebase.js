import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'
import { firebaseConfig } from './firebaseConfig';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebase = initializeApp(firebaseConfig);
const storage = getStorage(firebase);
const db = getFirestore(firebase);
console.log(firebase.name);

export  { firebase,storage, db};

