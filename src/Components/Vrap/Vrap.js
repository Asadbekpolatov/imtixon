import React from 'react'
import "./Vrap.css"
import img7 from "../../image/img7.jpg"
import img8 from "../../image/img8.jpg"
import img9 from "../../image/img9.jpg"
import img10 from "../../image/img10.jpg"

function Vrap() {
    return (
        <div>
            <div className="vrap1"><h3>MOST RECENT POSTS</h3>
                <h1>Adrenaline Diesel Blog</h1>
                <p>From industry insights and opinions to rebuilds and rigs for sale, our blog hosts a variety of diesel and trucking related content.</p>
                <button>View all articles</button></div>

            <div className="vrap">



                <div className="left1">
                    <div className="bir"> <img src={img7} alt="" />
                        <span>Written by:</span>
                        <span>
                            Adrenaline Diesel Staff </span>
                        <h1>
                            The Peterbilt Model 579 - Is It The New Benchmark for  2023?</h1>
                        <p>If you work in the trucking industry, you’re undoubtedly familiar with Peterbilt trucks. You’ve likely heard of the new Peterbilt Model 579, too. Are you curious about this new model and what separates it from other trucks on the market? If so, this guide will answer all your most pressing questions. Find out everything you need to know about the Peterbilt 579 below.</p>
                        <button>Read Post</button>
                    </div>



                </div>
                <div className="right1">
                    <div className="uch">
                        <img src={img9} alt="" />
                        <span>Written by:</span>
                        <span>
                            Adrenaline Diesel Staff </span>
                        <h1>

                            5 Indicators Your Heavy Duty Truck Needs Engine Repair</h1>
                        <p>Did you know that on an almost daily basis, a truck breaks down on the side of the road? Learn the five warning indications that your diesel engine requires maintenance or repairs by reading on.</p>
                        <button>Read Post</button>
                    </div>
                    <div className="ohirgi">
                        <img src={img10} alt="" />
                        <span>Written by:</span>
                        <span>
                            Adrenaline Diesel Staff </span>
                        <h1>

                            Top Heavy-Duty Diesel Truck Engine Conversion Mistakes & How to Avoid Them</h1>
                        <p>The most common types of engine repairs for heavy-duty truck owners include replacing the engine, converting it to a different type, and exchanging it for another engine. A heavy-duty repair shop can assist with all of these options. In this post, we will delve deeper into the specific procedures involved in each type of engine conversion.</p>
                        <button>Read Post</button>
                    </div></div>

            </div>


        </div>

    )
}

export default Vrap