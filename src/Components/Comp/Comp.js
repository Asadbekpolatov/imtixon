import React from 'react'
import "./Comp.css"
import img2500 from "../../image/img2500.jpg"

function Comp() {
    return (
        <div>
            <img className='img2500' src={img2500} alt="" />
            <div className="comp">  <h3>ADRENALINE DIESEL PARTS</h3>
                <h1>Heavy Duty Parts</h1>
                <p>Select your engine make from the list below to begin sourcing heavy duty diesel engine and truck parts:</p>
                <div className="bat">  <button>Caterpillar</button>
                <button>Detroit Diesal</button> <br />
                <button>Mack</button>
                <button>Paccar</button> <br />
                <button>Cummins</button>
                <button>International</button> <br />
                <button>Mercedes</button>
                <button>Volvo</button></div></div>
              
        </div>
    )
}

export default Comp