import './Login.css'
import { useLocation, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { doc, getDoc, setDoc } from "firebase/firestore"; 
import { getAuth } from 'firebase/auth';
import swal from 'sweetalert';
import { db } from './firebase';

export default function Join() {
    const navigate = useNavigate();
    const location = useLocation();
    const [firstName,setFirstName] = useState('');
    const [phone,setPhone] = useState('');

     async function handleUser(){
         let user = {
            name: firstName,
            email: getAuth().currentUser.email,
            phone:phone
          }
        await setDoc(doc(db, "users",getAuth().currentUser.email), user).then(()=>{
            navigate('/home');
        }).catch((error)=> swal({
            title:"oops",
            text: "Unable to join",
            icon:"error",
            button:{
                text:'Try again'+error
            },
            closeOnClickOutside: true,
        }))
    }

    return (
        <div className='login'>
            <div className='login-container'>
            <img src={ require('./Images/bake.png') } className="logo" />
            <div className="login-title">
               Introduce yourself :)
            </div>
            <div>
                <label style={{color:'rgba(0,0,0,0.5)'}}>Your name ?</label>
                <input
                autoFocus 
                placeholder="Name" 
                required
                value={firstName}
                onChange={(e)=>{ setFirstName(e.target.value)}}
                />
                <label style={{color:'rgba(0,0,0,0.5)'}}> Contact Number</label>
                <input 
                placeholder="+91" 
                required
                value={phone}
                onChange={(e)=>{ setPhone(e.target.value)}}
                />
                
            </div>
                <div className='btn-container' style={{marginTop:'20px'}}>
                <button  onClick={handleUser}>
                            Join
                        </button>
                </div>
            </div>
        </div>
    )
}
