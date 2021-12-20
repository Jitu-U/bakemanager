import './UserPanel.css'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth,signOut } from 'firebase/auth'


export default function UserPanel(props) {

    const handleLogout = () => {
        signOut(getAuth()).then(() =>{
            
        }).catch((error) => {
            alert(error)
        })
    }

    useEffect(() => {
        
    }, [getAuth.currentUser])

    const navigate = useNavigate();
    return (
        (getAuth().currentUser ? (
            <div className="user-bar">
                <div className="wlcm">Welcome &nbsp;{getAuth().currentUser.email}</div>
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
                    <button className='order-btn'>Your Order</button>
                        <button className='logout-btn' onClick={()=>{ navigate('/login')}}>Login</button>
                </div>
                </div>
            </>
        ))
    )
}
