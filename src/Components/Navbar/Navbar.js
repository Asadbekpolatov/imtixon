import React from 'react'
import "./Navbar.css"
import { AiFillStar } from "react-icons/ai"

import {FaBars} from "react-icons/fa"
import {FaShuttleVan} from "react-icons/fa"
// import img6 from "../../image/img6.jpg"
import img15 from "../../image/img15.png"
import img100 from "../../image/img100.png"
import img200 from "../../image/img200.png"
import img300 from "../../image/img300.png"
import img400 from "../../image/img400.png"
import img500 from "../../image/img500.png"
import img600 from "../../image/img600.png"
import img700 from "../../image/img700.png"
import img800 from "../../image/img800.png"
import img900 from "../../image/img900.png"
import img1000 from "../../image/img1000.png"
import img1100 from "../../image/img1100.png"
import img1200 from "../../image/img1200.png"
import img1300 from "../../image/img1300.png"
// import img1400 from "../../image/img1400.png"
import furgon1 from "../../image/furgon1.png"
import furgon2 from "../../image/furgon2.png"

import { BsChevronDown } from "react-icons/bs"
function Navbar() {
    return (
        <div>
            <div className="ota">
                <div className="bola">
                    <h1>13019151StreetNW,Edmonton,Alberta
                        <AiFillStar className='icon' />  <AiFillStar className='icon' />  <AiFillStar className='icon' />  <AiFillStar className='icon' />  <AiFillStar className='icon' />  71Reviews </h1>
                </div>
                <div className="navbar">
                    <img src={img15} alt="" />
                    <ul>
                        <li>Heavy Duty Services <BsChevronDown />
                            <div className='li1_hover'>
                                <div className="hover_div1">

                                    <h1>Commercial Vehicle inspections</h1>
                                    <img className='img100' src={img100} alt="" />
                                    <h1>Electrical Electronic inspections</h1>
                                    <img className='img200' src={img200} alt="" />
                                    <h1>Exhaust Systems</h1>
                                    <img className='img300' src={img300} alt="" />
                                    <h1>Suspension</h1>
                                    <img className='img400' src={img400} alt="" />

                                </div>
                                <div className="hover_div2">


                                    <h1>Commercial Vehicle inspections</h1>
                                    <img className='img500' src={img500} alt="" />

                                    <h1>Electrical Electronic inspections</h1>
                                    <img className='img600' src={img600} alt="" />
                                    <h1>Exhaust Systems</h1>
                                    <img className='img700' src={img700} alt="" />
                                    <h1>Suspension</h1>
                                    <img className='img800' src={img800} alt="" />

                                </div>
                                <div className="hover_div3">

                                    <h1>Commercial Vehicle inspections</h1>
                                    <img className='img900' src={img900} alt="" />
                                    <h1>Electrical Electronic inspections</h1>
                                    <img className='img1000' src={img1000} alt="" />
                                    <h1>Exhaust Systems</h1>
                                    <img className='img1100' src={img1100} alt="" />

                                </div>

                            </div>
                        </li>
                        <li>Perfonmanke <BsChevronDown />
                            <div className='li2_hover'>
                             <h2>Heavy Duty Tuning</h2>
                             <h2>Agriculture Tuning</h2>
                             <h2>Construction Tuning</h2>
                            </div>
                        </li>
                        <li>Parts & Dealers <BsChevronDown />
                            <div className='li3_hover'>
                                <h1>salom</h1>
                            </div></li>
                        <li>Company <BsChevronDown />
                            <div className='li4_hover'>
                                <h2>About Adrenaline Diesla</h2>
                                <h2>Reviews</h2>
                                <h2>Cerrers</h2>
                                <h2>Articles</h2>
                            </div></li>
                        <li>1(866)839-9693</li>
                        <button>Book Online</button>

                    </ul>


                    <div className='bars'>
                    < FaBars className='bar' />
                    </div>

                </div>
                <div className="kichiknavbar"></div>

                <div className="bola1">

                    {/* <img src={img6} alt="" /> */}
                    <span>ADRENALINE DIESEL</span>
                    <h1>Edmonton's Heavy-Duty Diesel Truck Repair Shop</h1>
                    <p>Adrenaline Diesel specializes in heavy-duty commercial truck and</p>
                    <p>trailer repair, performance tuning and part sales in Edmonton,</p>
                    <p>Alberta. With 7 bays and a vast dealer network, our highly-</p>
                    <p>reviewed customer support team and professional diesel</p>
                    <p>mechanics are ready to assist with all of your needs.</p>
                    <button>Request Appointment</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar