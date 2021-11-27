import './MenuCard.css'
import React from 'react'

function MenuCard(props) {
    return (
        <div className="card-container">
            <div className="left-sec">
            <div className="dish-title">{props.name}</div>
            <div className="dish-img" >
                <img src={require(props.imgurl)} alt="Lol"></img>
            </div>
            </div>
            <div className="right-sec">

            </div>
        </div>
    )
}

export default MenuCard
