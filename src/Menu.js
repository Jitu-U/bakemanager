import './Menu.css'
import React from 'react'
import MenuCard from './components/MenuCard'
import { ref, getDownloadURL,getStorage } from "firebase/storage";
//import { storage } from './firebase'


export default function Menu() {

    const storage = getStorage();
const storageRef = ref(storage,'dish-images/burger.jpg');
const imsrc = '';

getDownloadURL(storageRef)
  .then((url) => {
     imsrc = url;
  })
  .catch((error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/object-not-found':
        // File doesn't exist
        break;
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect the server response
        break;
    }
  });




    return (
        <div className="menu">
           <MenuCard name="Ham Burger" />
           <MenuCard name="Ham Burger"/>
           <MenuCard name="Ham Burger"/>
           <MenuCard name="Ham Burger"/>
           <MenuCard name="Ham Burger"/>
           <MenuCard name="Ham Burger"/>
           <MenuCard name="Ham Burger"/>
           <MenuCard name="Ham Burger"/>
           <MenuCard name="Ham Burger"/>
           <MenuCard name="Ham Burger"/>
           <MenuCard name="Ham Burger"/>
           <MenuCard name="Ham Burger"/>
           <MenuCard name="Ham Burger"/>
           <MenuCard name="Ham Burger"/>
           <MenuCard name="Ham Burger"/>
           <MenuCard name="Ham Burger"/>
        </div>
    )
}
