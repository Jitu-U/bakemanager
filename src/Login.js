import React, { useState,useEffect }from 'react'
import firebase from './firebase'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import './Login.css'


export default function Login() {

    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState("");

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
        signInWithEmailAndPassword(getAuth(),email,password)
        .catch((err) => {
            switch(err.code){
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(err.message);
                    break;
                case "auth/wrong-password":
                    setPasswordError(err.message);
                    break;
            }
        });
    }

    const handleSignup = () => {
        clearErrors();
        createUserWithEmailAndPassword(getAuth(),email,password)
        .catch((err) => {
            switch(err.code){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(err.message);
                    break;
                case "auth/weak-password":
                    setPasswordError(err.message);
                    break;
            }
        });
    }

    const handleLogout = () => {
        getAuth().signOut();
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
                        <p>don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>sign up</span></p>
                        </>
                    ) : (
                        <>
                        <button onClick={handleSignup}>
                            Signup
                        </button>
                        <p>have an account? <span onClick={() => setHasAccount(!hasAccount)}>sign in</span></p>
                        </>
                    )
                }
            </div>
        </div>
        </section>
    )
}
