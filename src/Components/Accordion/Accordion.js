import React, { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import "./Accordion.css"
const Accordion = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);
    const [isOpen7, setIsOpen7] = useState(false);
    const [isOpen8, setIsOpen8] = useState(false);

    const toggleAccordion1 = () => {
        setIsOpen1(!isOpen1);
    };

    const toggleAccordion2 = () => {
        setIsOpen2(!isOpen2);
    };

    const toggleAccordion3 = () => {
        setIsOpen3(!isOpen3);
    };

    const toggleAccordion4 = () => {
        setIsOpen4(!isOpen4);
    };

    const toggleAccordion5 = () => {
        setIsOpen5(!isOpen5);
    };

    const toggleAccordion6 = () => {
        setIsOpen6(!isOpen6);
    };

    const toggleAccordion7 = () => {
        setIsOpen7(!isOpen7);
    };


    const toggleAccordion8 = () => {
        setIsOpen8(!isOpen8);
    };

    return (
        <div>
            <div className="accordion">
                <div className="accordion-header" onClick={toggleAccordion1}>
                    <h3>1. Look For Extensive Experience</h3>
                    <span className={isOpen1 ? 'open' : 'closed'}></span>
                    <AiOutlineDown style={{ fontSize: '24px' }} />
                </div>

                {isOpen1 && (
                    <div className="accordion-content active">
                        <p>
                            When looking for a diesel repair shop near you, you first need to ensure they offer all the services you need. Whether you have a truck, recreational vehicle, bus, or tractor, the repair shop you choose should have the required skills and equipment to deal with such heavy-duty vehicles.
                        </p>
                        <p style={{ marginTop: '15px' }}>
                            That way, you don’t have to take your vehicle to different shops to fix each problem. Therefore, before you choose repair providers, check if they can handle some of the common diesel engine problems, such as:
                        </p>
                        <ul>
                            <li>Engine overheating</li>
                            <li>Hard to start engine</li>
                            <li>Oil supply problems</li>
                            <li>Engine oil oxidation</li>
                            <li>Black exhaust</li>
                            <li>Glow plug issues</li>
                            <li>Loud noises</li>
                            <li>Oil leakages</li>
                        </ul>
                        <p style={{ marginTop: '20px' }}>
                            The advantage of an all-in-one repair shop is that it will cost you less and save your time. Moreover, experienced mechanics tend to provide more personal and individualized services.
                        </p>
                    </div>
                )}
            </div>

            <div className="accordion">
                <div className="accordion-header" onClick={toggleAccordion2}>
                    <h3>2. Another Accordion Item</h3>
                    <span className={isOpen2 ? 'open' : 'closed'}></span>
                    <AiOutlineDown style={{ fontSize: '24px' }} />
                </div>

                {isOpen2 && (
                    <div className="accordion-content active">
                        <p>
                            If you’re a heavy-duty driver who delivers essential goods and services, you probably understand what being stuck on the road does to the economy and community. A slight delay can negatively impact vital sectors such as water, food, and even emergency services delivery.
                        </p>

                        <p>It can be difficult to find reliable parts for some trucks at odd hours. As such, its essential to choose a shop that offers repair services at any hour of the day. This can help you avoid costly downtime whenever your truck breaks down.</p>

                        <p>Moreover, you may need a mobile mechanic to come to you if you’re stranded on the road, whether it's a weekend or holiday.</p>
                    </div>
                )}
            </div>

            <div className="accordion">
                <div className="accordion-header" onClick={toggleAccordion3}>
                    <h3>3. Use of Advanced Software</h3>
                    <span className={isOpen3 ? 'open' : 'closed'}></span>
                    <AiOutlineDown style={{ fontSize: '24px' }} />
                </div>

                {isOpen3 && (
                    <div className="accordion-content active">
                        <p>
                            Up to date, diagnostic computers are an integral part of any diesel truck repair shop. They have software that pinpoints the exact broken parts in a vehicle, locate the exact transmission code or problem that caused it, identify the malfunctioning components, and even determine whether the truck needs a new engine.
                        </p>

                        <p>Sometimes heavy-duty vehicles can have unrecognized issues that can significantly affect your safety and overall performance of the truck and even lead to expensive damages to repair.</p>

                        <p>Therefore, ensure you choose a service centre with the best diagnostic tools. With such technology, mechanics can diagnose the problem and address it immediately—saving you a lot of time.</p>
                    </div>
                )}
            </div>


            <div className="accordion">
                <div className="accordion-header" onClick={toggleAccordion4}>
                    <h3>4. What is the state of the facility like?</h3>
                    <span className={isOpen4 ? 'open' : 'closed'}></span>
                    <AiOutlineDown style={{ fontSize: '24px' }} />
                </div>

                {isOpen4 && (
                    <div className="accordion-content active">
                        <p>
                            A repair shop that offers quality services should have a clean and organized environment. When everything is in place, there is an increase in productivity and a sense of professionalism.
                        </p>

                        <p>A clean working space also promotes safe working conditions. For this reason, a repair shop should have rules that protect employees, customers, and vehicles from accidents around the facility.

                        </p>

                        <p>
                            How can you identify a clean and well-maintained repair shop?
                        </p>

                        <ul>
                            <li>Working tools are clean, organized, and stored</li>
                            <li>The facility is in good condition both outside and inside</li>
                            <li>Bathrooms and waiting room are conducive</li>
                            <li>Floors are clean</li>
                            <li>Technicians are in proper and clean attires</li>
                        </ul>

                        <p>When choosing where to service your vehicle, you should remember that a clean work area accurately reflects the business owner. So, if a service center is clean, you can rest assured your vehicle will come back to you in a good state.

                        </p>
                    </div>
                )}
            </div>

            <div className="accordion">
                <div className="accordion-header" onClick={toggleAccordion5}>
                    <h3>5. Make sure the shop has a good reputation.</h3>
                    <span className={isOpen5 ? 'open' : 'closed'}></span>
                    <AiOutlineDown style={{ fontSize: '24px' }} />
                </div>

                {isOpen5 && (
                    <div className="accordion-content active">
                        <p>
                            Before choosing a repair service, do a background check to see how long the business has been in operation by visiting their website. You can also get information from reading online Google reviews where other customers share their experience with the mechanic.
                        </p>

                        <p>
                            If you find that a shop has more positive reviews and a higher rating, you can opt for it. That is because google ratings tend to give unbiased feedback on a shop’s capability and the kind of services they offer.
                        </p>

                        <p>Another way to find reliable and trustworthy mechanics is through referrals from friends, family, or other drivers on the road.</p>
                    </div>
                )}
            </div>

            <div className="accordion">
                <div className="accordion-header" onClick={toggleAccordion6}>
                    <h3>6. Do they stock high-quality replacement and OEM parts?</h3>
                    <span className={isOpen6 ? 'open' : 'closed'}></span>
                    <AiOutlineDown style={{ fontSize: '24px' }} />
                </div>

                {isOpen6 && (
                    <div className="accordion-content active">

                        <p>
                            Owning a diesel truck is a huge investment that you shouldn’t take lightly. That is why you should take care of your engine and maintain it with the exact parts and accessories that fit the make and model of your vehicle.
                        </p>

                        <p>If a mechanic uses parts that don’t fit your vehicle, you’ll experience safety issues and poor performance.</p>

                        <p>
                            Therefore, choose a repair shop that uses quality replacement auto parts if you want to keep your vehicle on the road for a long time.
                        </p>
                    </div>
                )}
            </div>

            <div className="accordion">
                <div className="accordion-header" onClick={toggleAccordion7}>
                    <h3>7. HET/ASE Certified Technicians</h3>
                    <span className={isOpen7 ? 'open' : 'closed'}></span>
                    <AiOutlineDown style={{ fontSize: '24px' }} />
                </div>

                {isOpen7 && (
                    <div className="accordion-content active">

                        <p>
                            When it comes to diesel repair, it’s a big mistake to choose a repair shop with technicians who aren’t certified. An unskilled mechanic can do more harm than good.
                        </p>

                        <p>HET and ASE certified technicians are more skilled in handling repairs for commercial vehicles. Certification improves the technician’s knowledge about trucks and creates a high level of accountability in maintaining work quality.</p>


                    </div>
                )}
            </div>

            <div className="accordion">
                <div className="accordion-header" onClick={toggleAccordion8}>
                    <h3>8. Compare Prices</h3>
                    <span className={isOpen8 ? 'open' : 'closed'}></span>
                    <AiOutlineDown style={{ fontSize: '24px' }} />
                </div>

                {isOpen8 && (
                    <div className="accordion-content active">

                        <p>
                            Most people are likely to choose a repair shop that offers the lowest prices. As a result, they end up sacrificing value and spending more in the long run.
                        </p>

                        <p>Typically, shops that have lower prices don’t offer a warranty for their services or products. They also tend to use low-quality aftermarket parts for repairs which makes them cheaper.</p>

                        <p>
                            Typically, shops that have lower prices don’t offer a warranty for their services or products. They also tend to use low-quality aftermarket parts for repairs which makes them cheaper.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Accordion;
