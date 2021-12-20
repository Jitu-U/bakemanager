import './Menu.css'
import React, {useState, useEffect} from 'react'
import MenuCard from './components/MenuCard'
import {  getDocs,getFirestore,query,collection } from "firebase/firestore";
import { firebase } from './firebase';

  

export default  function Menu() {
 
  const items = [];
  const [menu, setMenu] = useState([])
  
  
  
  

  useEffect(() => {
    async function readAll(){
      const firestore = getFirestore()
      const collectionRef = collection(firestore, '/menu')
      let q = query(collectionRef);
      const querySnapshot = await getDocs(query(collection(firestore, '/menu')))
      
      querySnapshot.forEach(document => {
         items.push(document.data());
      })
      setMenu(items);

      console.log();
    }
   readAll();
   
  },[]);



    return (
        <div className="menu">
           
          {
            menu.map( item => {
              return (
                <MenuCard name={item.name} id={item.name} description={item.description} price={item.price} imageUrl={item['image url']}/>
              )
            })
             
          }
          
        </div>
    )
}
