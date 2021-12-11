import './MenuCard.css'
import React, { useState }from 'react'
import {IoIosArrowUp, IoIosArrowDown} from 'react-icons/io'




function MenuCard(props) {

    const [val, setValue] = useState(1);

    const handleUp = () => {
        if(val<7){
            setValue(val+1);
        }
            
    }

    const handleDown = () => {
            if( val > 0){
                setValue(val -1);
            }
    }

    return (
        <div className="card-container">
            <div className="left-sec">
            
            <div className="dish-img" >
                <img  alt="Lol" src="https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Spinach-Tomato-Pasta-bowl.jpg" ></img>
            </div>
            </div>
            <div className="mid-sec">
                <div className="dish-title">{props.name}</div>
                <div className='-down-sec'>
                    <div className='-des-sec'>
                        <div className='des'>
                        {props.description}
                        </div>
                        <div className='price'>
                            {props.price} Rs.
                        </div>
                    </div>
                    <div className='form-sec'>
                        <div className='order-value'>
                            <IoIosArrowUp size={21} onClick={handleUp} className='cntrl-icon'/>
                            <input type={'number'} value={val} min={0} name="quantity" pattern={"\d{2}"} ></input>
                            <IoIosArrowDown size={21} onClick={handleDown} className='cntrl-icon'/>
                        </div>
                        <button className='add-btn'> Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuCard
