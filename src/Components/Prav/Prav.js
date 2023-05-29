import React from 'react'
import "./Prav.css"
import img12 from "../../image/img12.png"
import img13 from "../../image/img13.png"
import img14 from "../../image/img14.png"


function Prav() {
    return (
        <div>
            <div className="prav">
                <div className="top">
                    <h3>THE ADRENALINE DIESEL DEALER PROGRAM</h3>
                    <h1>Heavy-duty parts supply & sourcing experts</h1>
                </div>
                <div className="bottom">
                    <div className="bottom1">
                        <img src={img12} alt="" />
                        <h2>Supply & selection</h2>
                        <p>Parts support and sourcing expertise from industry experts gets you the right solution every time. Big or small, our network gets you answers and options faster than anyone else.</p>
                    </div>
                    <div className="bottom1">
                        <img src={img13} alt="" />
                        <h2>Source OEM parts</h2>
                        <p>Adrenaline Diesel has an extensive network with manufacturers across North America and Europe. Our buying power, logistics and low overhead, allow us to provide you with increased service that is competitively priced.</p>
                    </div>
                    <br />
                    <div className="bottom1">
                        <img src={img14} alt="" />
                        <h2>Exclusive, custom parts supplier</h2>
                        <p>As an industry leader, Adrenaline Diesel invests heavily in custom, performance parts. Exclusive to us, these parts are built to beat the performance offered by competitors and EOM solutions.</p>
                    </div>
                    <div className="bottom1">
                        <img src={img14} alt="" />
                        <h2>Become an Adrenaline Dealer</h2>
                        <p>Talk to our sales team today and see how a partnership with Adrenaline Diesel can help take your diesel repair shop to the next level.</p>
                        <span>Become A Dealer </span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Prav