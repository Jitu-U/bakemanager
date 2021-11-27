import './UserPanel.css'
import React from 'react'
import { getAuth } from 'firebase/auth'


export default function UserPanel(props) {

    return (
        (getAuth ? (
            <div className="user-bar">
                <div className="wlcm">{props.msg}</div>
                <div className="order-icon">
                    <button>Your Order</button>
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
