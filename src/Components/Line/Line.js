import React from 'react'
import "./Line.css"
import { AiFillStar } from "react-icons/ai"
import img3 from "../../image/img3.png"
import img2 from "../../image/img2.png"
import img4 from "../../image/img4.png"


function Line() {
    return (
        <div>
            <div className="otasi">
                <h1>What our customers say</h1>
                <div className="bolasi1">
                    <div className="box">
                        <h2><span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span> Rating</h2>
                        <h3>4.6 <AiFillStar className='icon' />  <AiFillStar className='icon' />  <AiFillStar className='icon' />  <AiFillStar className='icon' />  <AiFillStar className='icon' />  <span className='spn'>116 reviews</span> </h3>


                    </div>
                    <button>write areview</button>
                </div>
                <div className="qizlari">
                    <div className="qizi1">
                        <div className="imgs"> <img src={img3} alt="" />
                            <h4>Chris Fulks <span> 1 day ago</span></h4>

                        </div>

                        <AiFillStar />  <AiFillStar />  <AiFillStar />  <AiFillStar />

                        <p className='ppp'>I'm with Cn'C Waste Solutions,and
                            I'va been using Adrenaloine diesel for
                            truck repairs and cvip,jeff and</p>
                        <div className="car">
                            {/* <h1 className='h11'>G</h1> */}
                            <span className='spd'>Posted on</span>
                            <h2 className='h21'>Google</h2>

                        </div>

                    </div>
                    <div className="qizi1">
                        <div className="imgs"> <img src={img2} alt="" />
                            <h4>Tiffany Blue <span> 3 day ago</span></h4>

                        </div>
                        <AiFillStar />  <AiFillStar />  <AiFillStar />  <AiFillStar />
                        <p className='ppp'>Engine deletes and engine swaps Go here first,don't bother with the other
                            guys.Adrenaline took great care of us
                        </p>
                        <div className="car">
                            {/* <h1 className='h11'>G</h1> */}
                            <span className='spd'>Posted on</span>
                            <h2 className='h21'>Google</h2>

                        </div>

                    </div>
                    <div className="qizi1">
                        <div className="imgs"> <img src={img4} alt="" />
                            <h4>Darrel Conrod <span> 8 day ago</span></h4>

                        </div>

                        <AiFillStar />  <AiFillStar />  <AiFillStar />  <AiFillStar />
                        <p className='ppp'>Replaced the head gastek,injector on
                            our Western Star 4700.Very fast
                            turnaround and great communication</p>
                        <div className="car">
                            {/* <h1 className='h11'>G</h1> */}
                            <span className='spd'>Posted on</span>
                            <h2 className='h21'>Google</h2>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Line