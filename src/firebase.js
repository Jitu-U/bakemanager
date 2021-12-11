import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { firebaseConfig } from './firebaseConfig';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebase = initializeApp(firebaseConfig);
const storage = getStorage(firebase);

console.log(firebase.name);

export  { firebase,storage };

