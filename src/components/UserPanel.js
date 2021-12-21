import './UserPanel.css'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth,signOut } from 'firebase/auth'
import swal from 'sweetalert'
import { db } from '../firebase'
import { getDoc,doc } from 'firebase/firestore'

export default function UserPanel(props) {

    const navigate = useNavigate();
    const [user,setUser] = useState({});
    


    const handleLogout = () => {
        signOut(getAuth()).then(() =>{
            swal({
                title:'You have been Logged out ',
                icon: 'info',
                button: {
                    text: 'home',
        
                }
            });
            navigate('/home');
        }).catch((error) => {
            alert(error)
        })
    }

    useEffect(() => {
        async function getData(){
           let snap = await getDoc(doc(db,'users',getAuth().currentUser.email));
            setUser(snap.data());
        };
        getData();
    }, [])

    
    return (
        (getAuth().currentUser ? (
            <div className="user-bar">
                <div className="wlcm">Welcome &nbsp;{user.name}</div>
                <div className="order-icon">
                    <button className='order-btn'>Your Order</button>
                        <button className='logout-btn' onClick={handleLogout}>Log out</button>
                </div>
            </div>
        ) : (
            <>
                <div className="user-bar">
                <div className="wlcm">Welcome Newbie</div>
                <div className="order-icon">
                    
                        <button className='logout-btn' onClick={()=>{ navigate('/login')}} style={{backgroundColor:'#ffdbd9'}}>Login</button>
                </div>
                </div>
            </>
        ))
    )
}
