
import React, {useEffect} from 'react';
import loder from './Images/loader-2.gif'
import logo from './Images/bake.png'
import './App.css';
import {  Route, Routes, useNavigate } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import { enableIndexedDbPersistence, collection, onSnapshot, query } from "firebase/firestore"; 
import { db } from './firebase'
 

enableIndexedDbPersistence(db)
  .catch((err) => {
      if (err.code == 'failed-precondition') {
          
      } else if (err.code == 'unimplemented') {
        
      }
  });
// Subsequent queries will use persistence, if it was enabled successfully


const q = query(collection(db, "menu"));
onSnapshot(q, { includeMetadataChanges: true }, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
        const source = snapshot.metadata.fromCache ? "local cache" : "server";
        console.log("Data came from " + source);
    });
});




const Welcome = () =>{

   const history = useNavigate();


   useEffect(() => {
     let timeout;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
       history('/home');
    }, 4000);
     
   }, [])
  return (
    <>
    <div  className="bg" style={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center', justifySelf:'center', width:'100vw', height:'100vh'}}>
      <img src={loder} alt="loading..."></img>
      <div style={{fontFamily: "sans-serif", fontWeight:"400", fontSize:'30px'}}>
      Welcome to  
      </div>
      <div style={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center', justifySelf:'center'}}>
      <img src={logo} alt="bakedonald's" style={{width:'50px', height: '50px'}}></img> BakeDonald's Foods
      </div>
    </div>
    </>
  )
}




function App() {



  return (
    <> 
      <Routes>
        <Route exact path="/" element={<Welcome/>} ></Route>
        <Route path="/home" element ={<Home/>}/>
        <Route path="/login" element={<Login/>} />
      </Routes>
  </>
  );
}

export default App;
