import React, { useState,useEffect }from 'react'
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged, RecaptchaVerifier } from "firebase/auth";
import './Login.css'
import 'firebase/firestore'
import firebase from './firebase'




getAuth().languageCode = 'it';

export default function Login() {


    window.recaptchaVerifier = 0;

    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(true);

    const navigate = useNavigate();

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin = () => {
        clearErrors();
        signInWithEmailAndPassword(getAuth(),email,password).then( () => {
            navigate('/home');
        }
        )
        .catch((err) => {
            switch(err.code){
                case "auth/invalid-email":
                    setEmailError('invalid email');
                    break;
                case "auth/user-disabled":
                    setEmailError('your account is disabled');
                    break;
                case "auth/user-not-found":
                    setEmailError('User not found');
                    break;
                case "auth/wrong-password":
                    setPasswordError('Password is wrong. Try again');
                    break;
            }
        });
    }

    const handleSignup = () => {
        clearErrors();
        createUserWithEmailAndPassword(getAuth(),email,password).then(
            function onSuccess(){

            }
        )
        .catch((err) => {
            switch(err.code){
                case "auth/email-already-in-use":
                    setEmailError('Email Already in use');
                    break;
                case "auth/invalid-email":
                    setEmailError('Invalid Email');
                    break;
                case "auth/weak-password":
                    setPasswordError('Password must be atleast 6 Characters long');
                    break;
            }
        });
    }

    

    const authListener = () => {
        onAuthStateChanged(user => {
            if(user){
                clearInputs();
                setUser(user);
            } else {
                setUser("");
            }
        })
    }

    /*useEffect(() => {
        authListener();
    },[])*/

    return (
        <section className="login">
        <div className="login-container">
        <img src={ require('./Images/bake.png') } className="logo" />
            <div className="login-title">
               Welcome !
            </div>
           <div>
                <label>Email</label>
                <input type="text" 
                autoFocus 
                placeholder="Enter Your Email" 
                required
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                ></input>
                <p className="error-message">{emailError}</p>
           </div>
           <label>password</label>
           <input type="password" 
                placeholder="Enter Your Password" 
                required
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                ></input>
                <p className="error-message">{passwordError}</p>

            <div className="btn-container">
                {
                    hasAccount ? (
                        <>
                        <button onClick={handleLogin}>
                            Sign In
                        </button>
                        <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                        </>
                    ) : (
                        <>
                        <button onClick={handleSignup}>
                            Sign up
                        </button>
                        <p>Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                        </>
                    )
                }
            </div>
            
        </div>
        
        </section>
    )
}
