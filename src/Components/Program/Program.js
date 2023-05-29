import React from 'react'
import "./Program.css"
import img6 from "../../image/img6.jpg"
import img111 from "../../image/img111.png"

function Program() {
    return (

        <div>

            <img className='imge' src={img6} alt="" />
            <div className="text"> <h1>Free VIN Decoder Tool</h1>

                <p>Simply input your VIN and view your vehicle details.</p>
                <h3>Enter your VIN Number:</h3>
                <h4></h4>
                <input type="text" />
                <input className='input2' type="text" />
                <button>Get results</button>
                <img src={img111} alt="" />


            </div>
        </div>


    )
}

export default Program