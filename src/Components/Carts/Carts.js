import React from 'react'
import "./Carts.css"
import cart1 from "../../image/cart1.png"
import cart2 from "../../image/cart2.png"
import cart3 from "../../image/cart3.png"
import cart4 from "../../image/cart4.png"
import cart5 from "../../image/cart5.png"
import cart6 from "../../image/cart6.png"
import cart7 from "../../image/cart7.png"
import cart8 from "../../image/cart8.png"
import cart9 from "../../image/cart9.png"
import cart10 from "../../image/cart10.png"
import cart11 from "../../image/cart11.png"

function Carts() {
    return (
        <div className='carts'>
            <div className="carts_navbar">
                <p>HEAVY DUTY DIESEL SERVICE</p>
                <h1>Select your service:</h1>
            </div>
            <div className='carts_carts'>
                <div className="carts_cart">
                    <div className="cart_nav">
                        <h3>Commercial Vehicle Inspections</h3>
                        <img src={cart1} alt="" />
                    </div>
                    <p>For over a decade, we here at Adrenaline Diesel have prioritized the safety of our customers and their vehicles above all else. Getting your commercial vehicle inspected is more than just a means of complying with Alberta’s CVIP, it’s a way to ensure you and your vehicle will be safe and operating at peak efficiency for years to come.</p>

                    <div className="buttons">
                        <button>Go to service</button>
                        <button>Schedule An Appointment</button>
                    </div>
                </div>

                <div className="carts_cart">
                    <div className="cart_nav">
                        <h3>Diagnostics</h3>
                        <img src={cart2} alt="" />
                    </div>
                    <p>Getting to the root of a problem requires systematic processes. Whether a complex electric issue or a simple fuse, we track our diagnostic processes and continually improve.</p>
                    <div className="buttons">
                        <button>Go to service</button>
                        <button>Schedule An Appointment</button>
                    </div>
                </div>

                <div className="carts_cart">
                    <div className="cart_nav">
                        <h3>Driveline</h3>
                        <img src={cart3} alt="" />
                    </div>
                    <p>From general driveline service to catastrophic failure repairs, our Heavy Equipment Technician (HET) and Red Seals certified diesel mechanics are driveline experts.</p>
                    <div className="buttons">
                        <button>Go to service</button>
                        <button>Schedule An Appointment</button>
                    </div>
                </div>

                <div className="carts_cart">
                    <div className="cart_nav">
                        <h3>Electrical & Electronic Specialties
                        </h3>
                        <img src={cart4} alt="" />
                    </div>
                    <p>Electrical problems in your heavy-duty commercial vehicle can interrupt your work and lead to irreparable damage. Our electrical servicing and inspection process will get to the bottom of any and all complex electrical issues your truck may be experiencing.</p>
                    <div className="buttons">
                        <button>Go to service</button>
                        <button>Schedule An Appointment</button>
                    </div>
                </div>

                <div className="carts_cart">
                    <div className="cart_nav">
                        <h3>Engine Conversions</h3>
                        <img src={cart5} alt="" />
                    </div>
                    <p>Adrenaline Diesel takes the mystery out of diesel conversions. If you're looking to reposer your rig from Cummins to CAT, Detroit to Cummins, or another diesel-to-diesel setup, you're in good hands.</p>
                    <div className="buttons">
                        <button>Go to service</button>
                        <button>Schedule An Appointment</button>
                    </div>
                </div>

                <div className="carts_cart">
                    <div className="cart_nav">
                        <h3>Engine Repair, Overhaul & Rebuild</h3>
                        <img src={cart6} alt="" />
                    </div>
                    <p>Every day that your truck is in the shop is a day that you aren’t on the road, making money. Adrenaline Diesel knows and understands the importance of getting repairs done quickly, correctly and affordably. No job is too big or too small for our experienced team.</p>
                    <div className="buttons">
                        <button>Go to service</button>
                        <button>Schedule An Appointment</button>
                    </div>
                </div>

                <div className="carts_cart">
                    <div className="cart_nav">
                        <h3>Exhaust Systems</h3>
                        <img src={cart7} alt="" />
                    </div>
                    <p>Exhaust issues can lead to a decrease in power, acceleration, and fuel economy. They'll often sound bad but their outcomes can be even worse. Be sure to have your exhaust serviced regularly to avoid potential problems.</p>
                    <div className="buttons">
                        <button>Go to service</button>
                        <button>Schedule An Appointment</button>
                    </div>
                </div>

                <div className="carts_cart">
                    <div className="cart_nav">
                        <h3>HVAC Systems</h3>
                        <img src={cart8} alt="" />
                    </div>
                    <p>Every day that your truck is in the shop is a day that you aren’t on the road, making money. Adrenaline Diesel knows and understands the importance of getting repairs done quickly, correctly and affordably. No job is too big or too small for our experienced team.</p>
                    <div className="buttons">
                        <button>Go to service</button>
                        <button>Schedule An Appointment</button>
                    </div>
                </div>

                <div className="carts_cart">
                    <div className="cart_nav">
                        <h3>Maintenance</h3>
                        <img src={cart9} alt="" />
                    </div>
                    <p>Commercial vehicles have incredibly complex systems that will fail and break down if not properly maintained. Here at Adrenaline Diesel, we offer a full suite of maintenance services that are sure to keep your truck on the road for years to come.</p>
                    <div className="buttons">
                        <button>Go to service</button>
                        <button>Schedule An Appointment</button>
                    </div>
                </div>

                <div className="carts_cart">
                    <div className="cart_nav">
                        <h3>Suspension</h3>
                        <img src={cart10} alt="" />
                    </div>
                    <p>Over time, the suspension on your heavy-duty commercial vehicle will experience gradual wear and tear due to the extreme forces and weight their subjected to on a daily basis. Because of this, it’s extremely important that you ensure your suspension is in good working order.</p>
                    <div className="buttons">
                        <button>Go to service</button>
                        <button>Schedule An Appointment</button>
                    </div>
                </div>

                <div className="carts_cart">
                    <div className="cart_nav">
                        <h3>Transmission & Clutch</h3>
                        <img src={cart11} alt="" />
                    </div>
                    <p>Your transmission is arguably the most important component in your heavy-duty commercial vehicle, for, without it, it would be impossible to move, not to mention haul or tow. Regardless of your transmission type, or its corresponding clutch, routine service and repair are of the utmost importance.</p>
                    <div className="buttons">
                        <button>Go to service</button>
                        <button>Schedule An Appointment</button>
                    </div>
                </div>
            </div>
           
        </div>
        
    )
}

export default Carts