import React from 'react'
import "./Collection.css"
import img5 from "../../image/img5.jpeg"

function Collection() {
    return (
        <div>
            <div className="container1">
                <div className="left">
                    <span>TRUCK REPAIR IN EDMONTON, AB</span>
                    <h1>Guide: How to Find the Best Diesel Repair Shop</h1>
                    <p>Diesel engines are among the most popular and highly efficient engines that exist in today's market. However, repairing them can be a bit expensive and tedious.
                        For instance, inspecting a diesel engine to determine whether its main parts are damaged requires a specialist—one who can save both your time and money. The entire engine unit may also need to be replaced. As a result, you should take your time finding a repair professional you can trust.
                        Let’s face it: Finding the right mechanics is not an easy task, especially for those who have recently purchased a new vehicle. That’s because most technicians lack considerable experience in repairing various parts of a vehicle, especially engines.
                        Use the information we’ve provided below to find the best diesel repair near you.</p>
                </div>
                <div className="right">
                    <img src={img5} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Collection