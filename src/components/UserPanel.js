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
        (getAuth ? (
            <div className="user-bar">
                <div className="wlcm">{props.msg}</div>
                <div className="order-icon">
                    <button className='order-btn'>Your Order</button>
                    {
                        getAuth().currentUser ? <button className='logout-btn' onClick={handleLogout}>Log out</button> : <button className='logout-btn'  onClick={()=>{ navigate('/login')}}>Log in</button>
                    }
                    
                </div>
            </div>
        ) : (
            <>
                <div className="user-bar">
                <div className="wlcm">Welcome Jitesh...
                What are we having today</div>
                </div>
            </>
        ))
    )
}
