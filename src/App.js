
import React  from 'react';
import './App.css';
import {  Route, Routes } from "react-router-dom";
import Login from './Login';
import Home from './Home';



function App() {
  return (
    <> 
      <Routes>
        <Route path="/home" element ={<Home/>}/>
        <Route path="/login" element={<Login/>} />
      </Routes>
  </>
  );
}

export default App;
