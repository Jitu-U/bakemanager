import './Home.css'
import React from 'react'
import Navbar from './components/Navbar'
import UserPanel from './components/UserPanel'
import Menu from './Menu'
import { useState, useEffect  } from 'react'


export default function Home() {

    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 10);
        });
      }, []);

    return (
        <div className="home">
           <div className="home-header">
           <Navbar></Navbar>
            <UserPanel msg="Welcome Jitesh!"/>  
            </div>
             <div className="menu-container">
                 <div></div>
                 <div className="menu-q">
                     What are we having Today ?
                 </div>
                <Menu/>
                <div className='info-bottom'>
                  Bakedonald's™ foods, since 2020
                </div>
             </div>
            
            <div className="order-mobile">
                   <button>Your Order</button>
                </div>
        </div>
    )
}
