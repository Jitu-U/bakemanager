import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1HRDeDEAF-OunMe7kSofkquQ4zBKWP1g",
    authDomain: "bakemanager.firebaseapp.com",
    projectId: "bakemanager",
    storageBucket: "bakemanager.appspot.com",
    messagingSenderId: "1012570722266",
    appId: "1:1012570722266:web:a431d2a17a1951ae9d3ae3",
    measurementId: "G-2E1WB3VQ15"
  };

const firebase = initializeApp(firebaseConfig);
const storage = getStorage(firebase);

console.log(firebase.name);

export  { firebase,storage };

