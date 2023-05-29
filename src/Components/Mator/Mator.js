import React from 'react'
import "./Mator.css"
import imgmator from "../../image/imgmator.png"
import cart2 from "../../image/cart2.png"

function Mator() {
    return (
        <div>
            <div className="mator">
                <img className='imgmator' src={imgmator} alt="" />
                <img src={cart2} alt="" />
                <img src={cart2} alt="" />
                <img src={cart2} alt="" />
            </div>
        </div>
    )
}

export default Mator