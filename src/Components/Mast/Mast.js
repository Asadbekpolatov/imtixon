import React from 'react'
import "./Mast.css"
import img15 from "../../image/img15.jpg"

function Mast() {
    return (
        <div>
            <img className='usta' src={img15} alt="" />
            <div className="mast">
                <h3>ADRENALINE DIESEL <span> PERFORMANCE TUNING</span></h3>
                <h1>Optimized solutions for every engine</h1>
                <p>Adrenaline Diesel offers a wide range of engine performance products and services to unlock your heavy truck, agricultural or construction equipment’s full potential. Select your industry to see options:</p>
                <div className="butons">
                    <button>Heavy Duty</button>
                    <button>Agriculture</button>
                    <button>Constryction</button>
                </div>
            </div>

        </div>
    )
}

export default Mast