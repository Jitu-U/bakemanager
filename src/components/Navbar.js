import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className="navbar">
            <img src={ require('../Images/bake.jpg') } className="logo" alt="Logo"/>
            <div className="logo-name">Bakedonald's</div>
        </div>
    )
}
